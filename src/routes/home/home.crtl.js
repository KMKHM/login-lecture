"use strict";

const home = (req, res) =>{
    res.render("home/index");
}

const login = (req, res) =>{
    res.render("home/login");
}

module.exports = {
    home, //hello : hello
    login,
}; // 객체에서 key만 입력하면 key와 같은 value를 넘겨주게 된다.