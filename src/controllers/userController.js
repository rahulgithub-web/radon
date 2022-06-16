const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (res, req) {
  try {
    let data = req.body;
    console.log(data);
    let savedData = await userModel.create(data);
    res.status(201).send({ msg: savedData });
    if (!mobile) {
      res.status(202).send({ msg: "mobile number is required" });
    } else res.status(400).send({ msg: "BAD REQUEST " });
  } catch (err) {
    console.log("This is the error:", err.message);
    return res.status(500).send({ msg: err.message });
  }
};

// -------------------------------------------------

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    if (userName === undefined && password === undefined) {
      res.status(400).send({ msg: "userName and password must be filled " });
    }
    let user = await userModel.findOne({
      emailId: userName,
      password: password,
    });
    if (!user)
      return res.status(401).send({
        status: false,
        msg: "username or the password is not corerct",
      });
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "radon",
        organisation: "FUnctionUp",
      },
      "functionup-radon"
    );
    res.setHeader("x-auth-token", token);
    res.send({ status: true, data: token });
  } catch (error) {
    return res.status(500).send({ status: false, msg: err.message });
  }
};

// -----------------------------------------------

const getUserData = async function (req, res) {
  try {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

    //If no token is present in the request header return error
    if (!token)
      return res
        .status(400)
        .send({ status: false, msg: "token must be present" });

    console.log(token);
    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken)
      return res.status(401).send({ status: false, msg: "token is invalid" });

    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res
        .status(204)
        .send({ status: false, msg: "No such user exists" });

    res.send({ status: true, data: userDetails });
  } catch (err) {
    return res.status(500).send({ status: false, msg: error.message });
  }
};

// --------------------------------------------

const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(400).send("No such user exists");
    }

    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      userData
    );
    res.status(200).send({ status: updatedUser, data: updatedUser });
  } catch (error) {
    return res.status(500).send({ status: false, msg: "user update failed" });
  }
};

// --------------------------------------------

const postMessage = async function (req, res) {
  try {
    let message = req.body.message;
    let token = req.headers["x-auth-token"];
    if (!token)
      return res.status(400).send({
        status: false,
        msg: "token must be present in the request header",
      });
    let decodedToken = jwt.verify(token, "functionup-radon");

    if (!decodedToken)
      return res.status(401).send({ status: false, msg: "token is not valid" });

    let userToBeModified = req.params.userId;
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId;

    //userId comparision to check if the logged-in user is requesting for their own data
    if (userToBeModified != userLoggedIn)
      return res.send({
        status: false,
        msg: "User logged is not allowed to modify the requested users data",
      });

    let user = await userModel.findById(req.params.userId);
    if (!user) return res.send({ status: false, msg: "No such user exists" });

    let updatedPosts = user.posts;
    //add the message to user's posts
    updatedPosts.push(message);
    let updatedUser = await userModel.findOneAndUpdate(
      { _id: user._id },
      { posts: updatedPosts },
      { new: true }
    );

    //return the updated user document
    return res.status(200).send({ status: true, data: updatedUser });
  } catch (error) {
    return res.status(500).send({ status: false, msg: "invalid message type" });
  }
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage;
