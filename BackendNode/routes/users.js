var express = require('express');
var router = express.Router();
var User = require('../models/user');
var uuid = require('uuid');

/* GET users listing. */
router.get('/getAllUserlist', function (req, res, next) {
  User.find({}, function (err, users) {
    if (err) return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(users);
  });
});


/* POST users Insert. */
router.post('/insertUser', function (req, res, next) {
  checkUsername(req.body.userName, function (response) {
    if (response) {
      User.create({
        userObj: {
          properties: {
            id: uuid.v4(),
            userName: req.body.userName,
            password: req.body.password,
            givenName: req.body.givenName,
            surName: req.body.surName,
            DOB: req.body.DOB,
          }
        }
      },
        function (err, user) {
          if (err) return res.status(500).json(err.message);
          success = { status: "success", message: "inserted" };

          res.status(200).send({"data":user._doc,...success} );
        });
    }
    else
      res.status(200).send({ status: "failed", message: "Username is already exists" });
  });
});

/* POST users Login. */
router.post('/loginUser', function (req, res, next) {
  console.log(req.body)
  var reqUsername = req.body.userName
  var reqPassword = req.body.password
  
  User.find({}, function (err, users) {
    if (err) return res.status(500).send("There was a problem finding the users.");
    if (users.length > 0) {
      var userdata = users.filter((item) => item.userObj.properties.userName == reqUsername && item.userObj.properties.password == reqPassword)
      var userobj={}
      if(userdata.length>0)
      userobj = { status: "success", userdata};
      else 
      userobj = { status: "failed", message: "username or password mismatch" };
      res.status(200).send(userobj);
    } else {
      var users = { status: "failed", message: "User Not Exist" };
      res.status(200).send(users);
    }
  });
 
});

/* Chect UserName. */
function checkUsername(username, callback) {
  User.find({}, function (err, users) {
    var status = false;
    if (err) { status = true; return callback(status) };
    var userdata = users.filter((item) => item.userObj.properties.userName == username)
    if (userdata.length > 0) {
      return callback(status);
    }
    return callback(true);
  });
}

module.exports = router;
