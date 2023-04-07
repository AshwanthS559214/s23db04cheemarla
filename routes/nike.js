var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nike', { title: 'Search Results of nike' });
});

module.exports = router;