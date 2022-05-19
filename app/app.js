"use strict";
// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();// 환경변수 => 개발은 팀단위로 하기 때문에 개개인마다 환경이 다르다 (운영체제가 다르다.)
// => 어떤 os를 사용하든 가져올 수 있다.
const app = express();

// 라우팅
const home = require("./src/routes/home")

//앱 세팅
app.set("views", "./src/views"); // 로그인 뷰 분리
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`)); 
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터의 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", home); // use: 미들웨어 등록

module.exports = app;