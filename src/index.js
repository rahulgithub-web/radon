const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route.js");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const url = "mongodb+srv://rahulKumar:QkhPfNwGEtL7HZV9@cluster0.ret8d19.mongodb.net/rahulKumar";
const port = process.env.PORT;

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(port || 3000, function () {
  console.log("Express listening on port " + (port || 3000));
});
