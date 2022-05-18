"use strict";

const fs = require("fs").promises;

class UserStorage{ 
    // 은닉화한 메서드나 변수는 항상 최상단으로 올려주는 게 컨벤션이다.
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users) // => [id, psword, name] = 키 값들만 얻어서 배열 생성
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if(isAll) return users;

        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {})
        return newUsers;
    }


    static getUsers(isAll,...fields){ //데이터를 받아오기 위한 메서드이다. 위의 users는 은닉돼서 이를 통해 받아온다.
        //...fields 배열형태로 받아옴
        return fs.readFile("./src/databases/users.json")
        .then((data) => {
           return this.#getUsers(data, isAll, fields);
        }) // 성공
        .catch(console.error); 
    }
    
    static getUserInfo(id) {
       return fs.readFile("./src/databases/users.json") // pending 상태가 된다. (데이터를 전부 읽어오지 못했다.)
         .then((data) => {
            return this.#getUserInfo(data, id);
         }) // 성공
         .catch(console.error); // 실패
    };

   
    static async save(userInfo){
        const users = await this.getUsers(true); // 모든 필드를 가져온다.

        if (users.id.includes(userInfo.id)) {
          throw "이미 존재하는 아이디입니다.";
        }
          // 데이터 추가
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return {success: true};
    }
}

module.exports = UserStorage