// backend/swagger.js
import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "Omechu",
    description: "Umc 8th Omechu 데모데이 프로젝트",
  },
  host: "omechu-api.log8.kr",
  schemes: ["https"],
  basePath: "/",
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/index.js", "./src/controllers/*.js"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
