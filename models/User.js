const mongoose = require("mongoose");

//User에 대한 스키마 설정
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //만약 seunggyu kwak@naver.com이라고 치면 공백을 없애주는 역할을 함
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number, // ex) 1이면 관리자, 0이면 사용자
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    //토큰 유효기간
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User }; //다른 곳에서도 쓸 수 있게 exports 해준다.
