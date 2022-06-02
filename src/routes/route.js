const express = require('express');
const underscore = require('underscore');
const welcome = require('../logger/logger');
const date = require('../util/helper');
const month = require('../util/helper');
const info = require('../util/helper');
const trim = require('../validator/formatter');
const lower = require('../validator/formatter');
const upper = require('../validator/formatter');
const _ = require('lodash');

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log(welcome.welcome());
    console.log("Current Date is " + date.date());
    console.log("Current Month is " + month.month());
    console.log(info.info());
    console.log(trim.trims());
    console.log(lower.lower());
    console.log(upper.upper());
    let firstElement = underscore(["Rahul","Kajol","Dilip"]);
    console.log("The first element from underscore is " + firstElement);
    res.send('My first ever api!')
});

// -------------------- 
router.get('/test-me1', function (req, res) {
    let arr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    res.send(_(arr,1));
});

// --------------------
    router.get('/test-me2', function (req, res) {
    let odd = [1,3,5,7,9,11,12,13,14,15];
    let newArr = _.tail(odd); 
    res.send(newArr); 
});

// --------------------
    router.get('/test-me3', function (req, res) {
    let arrNo = _.union([3,5],[6,9,2],[11,6,2]);
    res.send(arrNo);
});

// --------------------
    router.get('/test-me4', function (req, res) {
    let pairs = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];
    let un = _.fromPairs(pairs);
    res.send(un);
});



module.exports = router;