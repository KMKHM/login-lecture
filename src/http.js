// http로 웹 서버 띄우기
// const http = require("http");
// const app = http.createServer((req, res) =>{
//     res.writeHead(200, {"Content-Type":"text/html ; charset=utf-8"});
//     if(req.url === "/"){
//         res.end("여기는 루트입니다.");
//     } else if (req.url === "/login"){
//         res.end("여기는 로그인입니다.");
//     }
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.");
// });
// => express가 훨씬 간결하다