"use strict";

class UserStorage{
    static #users = { //정적변수로 해놔야 클래스자체에서 users에 접근 가능 #을 하면 private한 변수가 돼 외부에서 불러올 수 없다.
        id: ["woorimIT", "나개발", "김팀장"],
        psword: ["1234", "12345", "1234546"],
        name: ["우리밋", "나개발", "김팀장"],
    };

    static getUsers(...fields){ //데이터를 받아오기 위한 메서드이다. 위의 users는 은닉돼서 이를 통해 받아온다.
        //...fields 배열형태로 받아옴
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {})
        return this.#users;
    }
    
    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users) // => [id, psword, name] = 키 값들만 얻어서 배열 생성
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser
        }, {});

        return userInfo
    }

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return {success: true};
    }
}

module.exports = UserStorage