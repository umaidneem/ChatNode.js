var User = require('../Models/UsersSchema');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    // res.render('Home');


    require('./Index');
    //var db = req.db;
    //var collection = db.get('users');
    User.find({"email": {$ne: global.globalEmail}}, function (e, docs) {
        // console.log(docs)
        res.render('Home', {
            "Home": docs
        });

    });

});



    // $('#buttonClick').click(function () {
    //
    //     alert("Selected persons are: ");
    //
    // });





module.exports = router;
