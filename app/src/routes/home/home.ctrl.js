"use strict";

const User = require("../../models/User");

const output = { 
    home : (req, res) =>{
        res.render("home/index");
    },

    login : (req, res) =>{
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    //     const id = req.body.id;
    //     const psword = req.body.psword;
        
    //     const users = UserStorage.getUsers("id", "psword");
        

    //     const response = {};

    //     if(users.id.includes(id)){
    //         const idx = users.id.indexOf(id);
    //         if(users.psword[idx] === psword){
    //             response.success = true; // response의 key값 추가
    //             return res.json(response);
    //         }
    //     }
    //     response.success = false;
    //     response.msg = "로그인에 실패하셨습니다.";
    //     return res.json(response);
     },
};

module.exports = {
    output,
    process,
}; // 객체에서 key만 입력하면 key와 같은 value를 넘겨주게 된다.