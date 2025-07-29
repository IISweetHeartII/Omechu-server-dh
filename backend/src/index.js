// index.js
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import MySQLStore from "express-mysql-session";
import { handleUserSignUp } from "./controllers/auth.controller.js";
import swaggerAutogen from "swagger-autogen";
import swaggerUiExpress from "swagger-ui-express";
import {
  handleRecommendMenu,
  handleFindRelatedMenu,
} from "./controllers/menu.controller.js";
import { testDatabaseConnection } from "./repositories/menu.repository.js";
import { handleFetchKakaoPlaces } from "./controllers/restaurant.controller.js";
import { handleFetchGooglePlaces } from "./controllers/restaurant.controller.js";
import { handleFetchKakaoPlaces } from "./controllers/restaurant.controller.js";
import { handleFetchGooglePlaces } from "./controllers/restaurant.controller.js";
import { generatePresignedUrl } from "./controllers/image.uploader.js";
import { handleUserLogin } from "./controllers/login.controller.js";
import { handleRenewSession } from "./controllers/session.controller.js";
import { handleUpdateUserInfo } from "./controllers/user.controller.js";
import { handleAddReview } from "./controllers/addReview.controller.js";
import { handleUserLogout } from "./controllers/logout.controller.js";
import { handleLike } from "./controllers/like.controller.js";
import { handleGetReview } from "./controllers/getReview.controller.js";
import { handleSendEmailCode } from "./controllers/email.controller.js";
import { handleVerifyEmailCode } from "./controllers/email.controller.js";
import { handleFetchPlaceDetail } from "./controllers/restaurant.controller.js";
import {
  handleResetRequest,
  handleResetPassword,
} from "./controllers/passwordReset.controller.js";
import {
  handleGetMenu,
  handleGetMenuInfo,
} from "./controllers/menu.controller.js";
import {
  handleGetUserProfile,
  handleUpdateUserProfile,
  handleGetRestaurantDetail,
  handleGetMyRestaurants,
  handleUpdateRestaurant,
  handleAddZzim,
  handleRemoveZzim,
  handleGetZzimList,
} from "./controllers/mypage.controller.js";
import { handleAddRestaurant } from "./controllers/addRestaurant.controller.js";
import { handleEditRestaurant } from "./controllers/editRestaurant.controller.js";
import { handleGetRestaurant } from "./controllers/getRestaurant.controller.js";
import { handleReportReview } from "./controllers/reportReveiw.controller.js";
import { handleGetCoordinates } from "./controllers/getCoordinates.controller.js";
import { handleInsertMukburim } from "./controllers/mukburim.controller.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.success = (success) => {
    return res.json({ resultType: "SUCCESS", error: null, success });
  };

  res.error = ({ errorCode = "unknown", reason = null, data = null }) => {
    return res.json({
      resultType: "FAIL",
      error: { errorCode, reason, data },
      success: null,
    });
  };
  next();
});

// MySQL 세션 저장소 설정
const MySQLSession = MySQLStore(session);
const sessionStore = new MySQLSession({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
app.use(
  cors({
    origin: ["http://localhost:3000", "https://omechu.log8.kr"],
    credentials: true,
  })
);
const isProduction = process.env.NODE_ENV === "production";
if (isProduction) {
  app.set("trust proxy", 1); // Nginx 같은 리버스 프록시 뒤에서 실행되는 것을 알림
}
console.log("isProduction", isProduction);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
      secure: isProduction, // 프로덕션 환경에서만 secure 활성화
      sameSite: isProduction ? "None" : "Lax", // 프로덕션은 None, 개발은 Lax
      domain: isProduction ? ".log8.kr" : undefined,
    },
  })
);
// 세션 검증 미들웨어
const isLoggedIn = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res
      .status(401)
      .error({ errorCode: "AUTH_REQUIRED", reason: "로그인이 필요합니다" });
  }
};

// swagger 미들웨어 등록
app.use(
  "/docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(
    {},
    {
      swaggerOptions: {
        url: "/openapi.json",
        withCredentials: true,
      },
    }
  )
);

app.get("/openapi.json", async (req, res, next) => {
  const options = {
    openapi: "3.0.0",
    disableLogs: true,
    writeOutputFile: false,
  };
  const outputFile = "/dev/null";
  const routes = ["./src/index.js"];
  const doc = {
    info: {
      title: "Omechu",
      description: "Umc 8th Omechu 데모데이 프로젝트",
    },
    host: "omechu-api.log8.kr",
    schemes: ["https"],
    basePath: "/",
  };
  const result = await swaggerAutogen(options)(outputFile, routes, doc);
  res.json(result ? result.data : null);
});

// 기타 미들웨어

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 기본 라우터
app.get("/", (req, res) => {
  res.send("Hello Omechu!");
});

//메인페이지 관련
app.post("/recommend", handleRecommendMenu);
app.get("/fetch-places", handleFetchKakaoPlaces);

app.post("/fetch-google-places", handleFetchGooglePlaces);
app.get("/place-detail/:id", handleFetchPlaceDetail);
app.post("/find-related-menu", handleFindRelatedMenu);
app.get("/menu", handleGetMenu);
app.post("/menu-info", handleGetMenuInfo);
app.post("/mukburim", handleInsertMukburim);

// Auth
app.post("/auth/signup", handleUserSignUp);
app.patch("/auth/complete", isLoggedIn, handleUpdateUserInfo);
app.post("/auth/reset-request", handleResetRequest);
app.patch("/auth/reset-passwd", handleResetPassword);
app.post("/auth/login", handleUserLogin);
app.post("/auth/reissue", isLoggedIn, handleRenewSession);
app.post("/auth/logout", isLoggedIn, handleUserLogout);
app.post("/auth/send", handleSendEmailCode);
app.post("/auth/verify", handleVerifyEmailCode);

app.post("/place/review/:id", isLoggedIn, handleAddReview);
app.get("/place/review/:id", isLoggedIn, handleGetReview);
app.patch("/place/:restId/like/:reviewId", isLoggedIn, handleLike);
app.post("/place", isLoggedIn, handleAddRestaurant);
app.get("/place", isLoggedIn, handleGetRestaurant);
app.patch("/place/detail/:id/edit", isLoggedIn, handleEditRestaurant);
app.get("/restaurant/:id", isLoggedIn, handleGetRestaurantDetail);
app.post("/place/:id/report", isLoggedIn, handleReportReview);
app.get("/test/restaurant/:id", handleGetRestaurantDetail);
app.post("/place/coordinates", isLoggedIn, handleGetCoordinates);
// ImageUpload
app.post("/image/upload", generatePresignedUrl);

// MyPage
app.get("/profile/:id", isLoggedIn, handleGetUserProfile);
app.patch("/profile/:id", isLoggedIn, handleUpdateUserProfile);
app.get("/restaurants/:userId", isLoggedIn, handleGetMyRestaurants);
app.get("/test/profile/:id", handleGetUserProfile);
app.patch("/test/profile/:id", handleUpdateUserProfile);
app.get("/test/restaurants/:userId", handleGetMyRestaurants);

// Heart
app.get("/hearts/:userId", isLoggedIn, handleGetZzimList);
app.post("/heart", isLoggedIn, handleAddZzim);
app.delete("/heart", isLoggedIn, handleRemoveZzim);
app.get("/test/hearts/:userId", handleGetZzimList);
app.post("/test/heart", handleAddZzim);
app.delete("/test/heart", handleRemoveZzim);

// 에러 처리 미들웨어 ( 미들웨어 중 가장 아래에 배치 )
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.statusCode || 500).error({
    errorCode: err.errorCode || "C001",
    reason: err.reason || err.message || "서버가 응답하지 못했습니다",
    data: err.data || null,
  });
});

// 데이터베이스 연결
async function initializeDatabase() {
  try {
    console.log("Initializing database...");
    const connectionTest = await testDatabaseConnection();

    if (connectionTest) {
      console.log("Database initialization completed successfully");
    } else {
      console.error(
        "Database connection failed. Please check your AWS RDS settings."
      );
    }
  } catch (error) {
    console.error("Error initializing database:", error);
    console.error(
      "Server will continue running, but database operations may fail."
    );
  }
}

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  await initializeDatabase();
});
