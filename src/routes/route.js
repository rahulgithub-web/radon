const express = require('express');
const welcome = require('../logger/logger');
const date = require('../util/helper');
const month = require('../util/helper');
const info = require('../util/helper');
const trim = require('../validator/formatter');
const lower = require('../validator/formatter');
const upper = require('../validator/formatter');

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log(welcome.welcome());
    console.log("Current Date is " + date.date());
    console.log("Current Month is " + month.month());
    console.log(info.info());
    console.log(trim.trims());
    console.log(lower.lower());
    console.log(upper.upper());
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason