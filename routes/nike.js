var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nike', { title: 'Search Results of nike' });
});

module.exports = router;

var express = require('express');
const nike_controlers= require('../controllers/nike');
var router = express.Router();
/* GET nike */
router.get('/', nike_controlers.nike_view_all_Page );
module.exports = router;