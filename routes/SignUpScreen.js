/**
 * Created by umaid on 4/27/16.
 */
var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('SignUpScreen');
});






module.exports = router;
