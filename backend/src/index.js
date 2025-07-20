// index.js
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import MySQLStore from "express-mysql-session";
import { handleUserSignUp } from "./controllers/auth.controller.js";
import swaggerAutogen from "swagger-autogen";
import swaggerUiExpress from "swagger-ui-express";
import { handleRecommendMenu } from "./controllers/menu.controller.js";
import { testDatabaseConnection } from "./repositories/menu.repository.js";
import { handleFetchKakaoPlaces } from "./controllers/restaurant.controller.js";
import { generatePresignedUrl } from "./controllers/image.uploader.js";
import { handleUserLogin } from "./controllers/login.controller.js";
import { handleRenewSession } from "./controllers/session.controller.js";
import { handleUpdateUserInfo } from "./controllers/user.controller.js";
import { handleAddReview } from "./controllers/addReview.controller.js";
import { handleUserLogout } from "./controllers/logout.controller.js";
import { handleLike } from "./controllers/like.controller.js";
import { handleGetReview } from "./controllers/getReview.controller.js";

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

// 세션 미들웨어 등록
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore, // 세션을 DB에 저장
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60, // 1시간
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
      description: "Umc 8th Omech 데모데이 프로젝트",
    },
    host: "localhost:3000",
  };
  const result = await swaggerAutogen(options)(outputFile, routes, doc);
  res.json(result ? result.data : null);
});

// 기타 미들웨어
app.use(cors({ 
  origin: ["http://localhost:3000"],
  credentials: true,
 }));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 기본 라우터
app.get("/", (req, res) => {
  res.send("Hello Omechu!");
});

// 회원가입 라우터 (POST /auth/signup)
app.post("/auth/signup", handleUserSignUp);
app.get("/recommend", handleRecommendMenu);
app.get("/fetch-places", handleFetchKakaoPlaces);
app.patch("/auth/complete", isLoggedIn, handleUpdateUserInfo);

// 프로필 이미지 presigned url 생성 API
app.post("/image/upload", generatePresignedUrl);
app.post("/auth/login", handleUserLogin);
// 세션 재발급 API
app.post("/auth/reissue", isLoggedIn, handleRenewSession)

app.post("/place/review/:id", isLoggedIn, handleAddReview);
app.post("/auth/logout", isLoggedIn, handleUserLogout);

app.patch("/place/:restId/like/:reviewId", isLoggedIn, handleLike);
app.get("/place/review/:id", isLoggedIn, handleGetReview);


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
