// 라우팅 분리
"use strict" // 이그크마 스크립트 준수

const express = require("express");
const router = express.Router();
const ctrl = require("./home.crtl") // 컨트롤러의 모듈화

router.get("/", ctrl.output.home); //컨트롤러 분리

router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

module.exports = router; // 모듈 내보내기