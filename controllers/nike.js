var nike = require('../models/nike');
// List of all nike

// List of all nike
exports.nike_list = async function(req, res) {
    try{
    thenike = await nike.find();
    res.send(thenike);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    //List of all nike
    exports.nike_list = async function(req, res) {
    try{
    thenike = await nike.find();
    res.send(thenike);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    }
    
// for a specific nike.
exports.nike_detail = function(req, res) {
res.send('NOT IMPLEMENTED: nike detail: ' + req.params.id);
};
// Handle nike create on POST.
exports.nike_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: nike create POST');
};
// Handle nike delete form on DELETE.
exports.nike_delete = function(req, res) {
res.send('NOT IMPLEMENTED: nike delete DELETE ' + req.params.id);
};
// Handle nike update form on PUT.
exports.nike_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: nike update PUT' + req.params.id);
};