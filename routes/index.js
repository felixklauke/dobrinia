var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }, function () {
      res.render('error', { message: 'Es ist ein Fehler aufgetreten.', status: 'tragisch'} )
  });
});

module.exports = router;
