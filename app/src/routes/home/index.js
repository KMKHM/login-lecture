// 라우팅 분리
"use strict";// 이그크마 스크립트 준수

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl") // 컨트롤러의 모듈화

router.get("/", ctrl.output.home); //컨트롤러 분리

router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router; // 모듈 내보내기