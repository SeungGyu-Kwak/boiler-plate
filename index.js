// 백엔드 시작점
const express = require("express"); //express라는 모듈 가지고 오기
const app = express(); //새로운 express앱 만들기
const port = 3500; //포트번호

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://seunggyu:0206@cluster0.x6o82td.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected.."))
  .catch((err) => console.log(err));

//앱은 루트 URL(/) 또는 라우트에 대한 요청에 “Hello World!”로 응답합니다.
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
