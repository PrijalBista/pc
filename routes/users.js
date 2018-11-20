var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use(function(req,res,next){
	if(req.session.username==null) res.redirect('/');
	else next();
});
router.get('/', function(req, res, next) {
  res.send('respond with a resource ' + req.session.username + '<br><a href="/logout">LOGOUT</a>');

});

module.exports = router;
