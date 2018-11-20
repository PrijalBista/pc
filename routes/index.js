var express = require('express');
var router = express.Router();
var dbo = require('../migration/DBO');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PimpMyPc' });
});

router.post('/login',function(req,res,next){
  dbo.executeQuery("Select * from users where username=? and password=?",[req.body.username,req.body.password])
  .then(function(val){
    console.log(val);
    //res.send("login success: username "+ val[0].username);
    let session = req.session;
    session.username=req.body.username;
    res.redirect('/users');
  });
});

router.post('/register',function(req,res,next){

  dbo.executeUpdate("Insert into users set ?",{username:req.body.username,password:req.body.password,email:req.body.email,fname:req.body.fname,lname:req.body.lname,address:req.body.address})
  .then(function(stat){
    res.send(stat);
  }).catch(function(err){
    console.log(err);
    res.send(err);
  });

});

router.get('/logout',function(req,res){
req.session.destroy(function(err) {
  if(err) {
    console.log(err);
  } else {
    res.redirect('/');
  }
})});

module.exports = router;
