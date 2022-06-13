const express = require("express");
const router = express.Router();  
const authorController = require("../controllers/authorController");
const bookController = require("../controllers/bookController");
const publisherController = require("../controllers/publisherController");
const middleware = require("../controllers/middleware")

router.post("/createAuthor", authorController.createAuthor);

router.post("/createPublisher", publisherController.createPublisher);

router.post("/createBook", bookController.createBook);

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails);

let {mid1, basicCode} = middleware;
router.get("/basicRoute", mid1, basicCode);

// router.put("/increasePriceBy10", bookController.priceIncrease);

module.exports = router;