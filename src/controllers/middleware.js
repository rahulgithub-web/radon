const express = require('express');
const app = express();

let currentDate = new Date();
let datetime =
  currentDate.getDate() +
  " " +
  (currentDate.getMonth() + 1) +
  " " +
  currentDate.getFullYear() +
  " " +
  currentDate.getHours() +
  ":" +
  currentDate.getMinutes() +
  ":" +
  currentDate.getSeconds();

const mid1 = async (res, req, next) => {
  console.log("Hi i am a middleware");
  let ip = req.ip;
  console.log(`${ip}`);
  next();
};

const basicCode = (res, req) => {
  let path = res.path;
  let ip = req.ip;
  let timeStamp = Date.now();
  console.log(datetime);
  console.log(timeStamp);
  console.log(path);
  console.log(ip);
  console.log("hey man, congrats you have reached the Handler");
//   next();
};

app.use(basicCode);

module.exports = { mid1, basicCode };
// module.exports.basicCode = basicCode;
