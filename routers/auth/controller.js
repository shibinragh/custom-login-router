const user = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var config = require('./config');
 

   console.log('test');
exports.register = function(req, res){
    console.log('test');
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  User.create({
    name : req.body.name,
    email : req.body.email,
    password : hashedPassword
  },
  function (err, user) {
      console.log('test');
    if (err) return res.status(500).send("There was a problem registering the user.")
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  }); 
}
