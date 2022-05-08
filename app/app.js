// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//앱 세팅
app.set("views", "./src/views"); // 로그인 뷰 분리
app.set("view engine", "ejs");

// 라우팅
const home = require("./src/routes/home")
app.use("/", home); // 미들웨어 등록
app.use(express.static(`${__dirname}/src/public`)); 
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터의 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));

module.exports = app;