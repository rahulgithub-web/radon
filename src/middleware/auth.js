const jwt = require("jsonwebtoken");

// const authenticate = function (req, res, next) {
//   //check the token in request header
//   //validate this token

//   let token = req.headers["x-auth-token"];
//   if (!token) token = req.headers["x-auth-token"];

//   //If no token is present in the request header return error
//   if (!token) return res.send({ status: false, msg: "token must be present" });

//   let decodedToken = jwt.verify(token, "functionup-radon");
//   if (!decodedToken)
//     return res.send({ status: false, msg: "token is invalid" });

//   return decodedconst authenticate = function (req, res, next) {
//   //check the token in request header
//   //validate this token

//   let token = req.headers["x-auth-token"];
//   if (!token) token = req.headers["x-auth-token"];

//   //If no token is present in the request header return error
//   if (!token) return res.send({ status: false, msg: "token must be present" });

//   let decodedToken = jwt.verify(token, "functionup-radon");
//   if (!decodedToken)
//     return res.send({ status: false, msg: "token is invalid" });

//   return decodedToken;

//   next();
// };Token;

//   next();
// };

// ==> Authorization <==

const authorise = async function (req, res, next) {
  // comapre the logged in user's id and the id in request
  try {
    let token = req.headers["x-auth-token"];
    if (!token)
      return res.status(400).send({
        status: false,
        msg: "token must be present in the request header",
      });
    let decordedToken = jwt.verify(token, "functionup-radon");

    if (!decordedToken)
      return res.status(401).send({ status: false, msg: "token is not valid" });

    let userToBeModified = req.params.userId;
    // userId for the logged-in user
    let userLoggedIn = decordedToken.userId;

    // heck if the logged-in user is requesting for their own data
    if (userToBeModified != userLoggedIn) {
      return res.status(403).send({
        status: false,
        msg: "User logged is not allowed to modify the requested users data",
      });
    }
  } catch (err) {
    console.log("This is the error:", err.message);
    return res.status(500).send({ msg: err.message });
  }
  next();
};

// module.exports.authenticate = authenticate;
module.exports.authorise = authorise;



