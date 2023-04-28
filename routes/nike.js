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

// GET request for one nike.
router.get('/nike/:id', nike_controlers.nike_detail);

/* GET detail nike page */
router.get('/detail', nike_controlers.nike_view_one_Page);

/* GET create nike page */
router.get('/create', nike_controlers.nike_create_Page);

/* GET create update page */
router.get('/update', nike_controlers.nike_update_Page);

// * GET delete nike page */
router.get('/delete', nike_controlers.nike_delete_Page);