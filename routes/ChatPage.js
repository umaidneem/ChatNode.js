/**
 * Created by Dell User on 4/28/2016.
 */

var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {

    res.render('ChatPage');


});

function sendFile() {

    console.log("Function Called"); 
}

module.exports = router;
