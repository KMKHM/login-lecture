"use strict";

const users = {
    id: ["woormIT", "나개발", "김팀장"],
    psdword: ["1234", "12345", "1234546"]
};



const output ={ 
    home : (req, res) =>{
        res.render("home/index");
    },

    login : (req, res) =>{
        res.render("home/login");
    }
}

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const psword = req.body.psword;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psdword[idx] === psword){
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    }
};
module.exports = {
    ouput,
    process,
}; // 객체에서 key만 입력하면 key와 같은 value를 넘겨주게 된다.