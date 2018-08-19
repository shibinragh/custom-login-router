const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var config = require('../config');
var VerifyToken = require('../VerifyToken');
 


exports.register = function(req, res){
    console.log('reg' + req.body.name);
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  User.create({
    name : req.body.name,
    email : req.body.email,
    password : hashedPassword
  },
  function (err, user) {
    if (err) return res.status(500).send("There was a problem registering the user.")
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  }); 
};

         
exports.me = function(req, res){     
  console.log('me'); 
  console.log('Cookies: ', req.cookies.token)       
  User.findById(req.userId, { password: 0 }, function (err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    
    //res.status(200).send(user);
    res.render('me');
  });
};
exports.home = function(req, res){   
  res.render('home');
}
exports.login = function(req, res){
  console.log('login'); 
    User.findOne({email: req.body.email}, function(err, user){
        if(err) return res.status(500).send('Error on the server.');
        if(!user) return res.status(404).send('No user found.');
        var passwordIsValid   = bcrypt.compareSync(req.body.password, user.password);
        if(!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        
        var token = jwt.sign({id: user._id}, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).cookie('token', token);
        //res.status(200).send({ auth: true, token: token })
        res.redirect('/home')
    })
};

exports.logout = function(req, res){
  res.clearCookie("token");
  res.status(200).send({ auth: false, token: null });
};



