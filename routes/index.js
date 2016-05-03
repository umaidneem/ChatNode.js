var express = require('express');
var router = express.Router();
var User = require('../Models/UsersSchema');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.post('/signup', function (req, res) {

    console.log(req.body);

    var db = req.db;

    var firstName = req.body.FirstName;
    var lastName = req.body.LastName;
    var email = req.body.Email;
    var gender = req.body.Gender;
    var password = req.body.Password;


    // var collection = db.get('userInfoCollection');
    //
    // User.save({
    //     "firstName": firstName,
    //     "lastName": lastName,
    //     "email": email,
    //     "gender": gender,
    //     "password": password
    // }, function (err, doc) {
    //     if (err) {
    //         // If it failed, return error
    //         res.send("There was a problem adding the information to the database.");
    //     }
    //     else {
    //         // And forward to success page
    //         res.redirect("Home");
    //         globalEmail = req.body.Email
    //
    //     }
    // });

    var newuser = new User();
    newuser.firstName  = firstName;
    newuser.lastName = lastName;
    newuser.email = email;
    newuser.gender = gender;
    newuser.password = password;

    newuser.save(function (err) {
        if (err) {
            console.log('Error in Saving user: ' + err);
            throw err;
        }else {
            console.log('User Registration successful');
            res.redirect("Home");
            globalEmail = req.body.Email;
        }
    });
    

});

router.post('/login', function (req, res) {
    

    var db = req.db;
    //var collection = db.get('users');

    console.log(req.body);
    var query = { 'email' : req.body.email , 'password':req.body.password };
    User.findOne(query, function(err, item) {
        console.log(item)

        if (item == null)
        {
            // window.alert("Invalid UserName or Password")
            res.send(500,'Invalid UserName or Password')

        }else
        {
            res.redirect("Home");
            globalEmail = req.body.email;
            globalCurrentUserId = item.user_id;
            //console.log(globalCurrentUserId);
        }

        // res.send(item);
    });
    
});

router.post('/chatAction', function (req, res) {

    console.log("Function Called");
    
});


module.exports = router;
