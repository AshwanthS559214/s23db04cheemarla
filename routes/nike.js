var express = require('express');
const nike_controlers= require('../controllers/nike');
var router = express.Router();

/* GET users listing. 
class nike{
    constructor(nike_type, nike_name, nike_cost){
        this.nike_type=nike_type;
        this.nike_name=nike_name;
        this.nike_cost=nike_cost;
    }
}

/* GET home page. 
router.get('/', function(req, res, next) {
    let s1= new nike('Knee-high','Nike',6000);
    let s2= new nike('Earth shoe','Adidas',4000);
    let s3= new nike('Flip-flops','Reebok',5000);
  res.render('nike', { title: 'Search Results nike',nike: [s1,s2,s3] });
});*/
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}
router.get('/', nike_controlers.nike_view_all_Page );
router.get('/detail', secured,nike_controlers.nike_view_one_Page);
router.get('/create', secured,nike_controlers.nike_create_Page);
//router.get('/update', nike_controlers.nike_update_Page);
router.get('/delete', secured,nike_controlers.nike_delete_Page);
module.exports = router;

/* GET update costume page */
    
router.get('/update', secured,nike_controlers.nike_update_Page);
    