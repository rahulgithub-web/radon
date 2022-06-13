const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route.js");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let url =
  "mongodb+srv://middleware:W3C7lcpvZgCDPyLj@cluster0.i8n8gwc.mongodb.net/middleware";

mongoose
  .connect(url, {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.use(function (req, res, next) {
  console.log("inside GLOBAL MW");
  res.send({ msg: "done" });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});
