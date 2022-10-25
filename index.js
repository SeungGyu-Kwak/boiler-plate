// 백엔드 시작점
const express = require("express"); //express라는 모듈 가지고 오기
const app = express(); //새로운 express앱 만들기
const port = 3500; //포트번호

const config = require("./config/key");

const { User } = require("./models/User");

//body-parser을 안쓴다. express에서 이제 기본적으로 포함되어있음
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB Connected.."))
  .catch((err) => console.log(err));

//앱은 루트 URL(/) 또는 라우트에 대한 요청에 “Hello World!”로 응답합니다.
app.get("/", (req, res) => {
  res.send("Hello World! ~ 새해복 많이 받으세용");
});

//회원가입을 위한 라우터
app.post("/register", (req, res) => {
  //회원 가입할 때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터베이스에 넣어준다.
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
