// 모듈
const express = require("express");
const app = express();

//앱 세팅
app.set("views", "./src/views"); // 로그인 뷰 분리
app.set("view engine", "ejs");

// 라우팅
const home = require("./src/routes/home")
app.use("/", home); // 미들웨어 등록 


module.exports = app;