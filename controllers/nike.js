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
    }jhji
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
/*exports.nike_detail = function(req, res) {
res.send('NOT IMPLEMENTED: nike detail: ' + req.params.id);
};
*/

// for a specific nike.
exports.nike_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await nike.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

// Handle nike create on POST.
exports.nike_create_post = async function(req, res) {
    console.log(req.body)
    let document = new nike();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"nike_type":"goat", "cost":12, "size":"large"}
    document.nike = req.body.nike;
    document.size = req.body.size;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle nike delete form on DELETE.
exports.nike_delete = function(req, res) {
res.send('NOT IMPLEMENTED: nike delete DELETE ' + req.params.id);
};
// Handle nike update form on PUT.
/*exports.nike_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: nike update PUT' + req.params.id);
};*/
//Handle nike update form on PUT.
exports.nike_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await nike.findById( req.params.id)
 // Do updates of properties
 if(req.body.nike)
 toUpdate.nike = req.body.nike;
 if(req.body.size) toUpdate.size = req.body.size;
 if(req.body.cost) toUpdate.cost = req.body.cost;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};
// VIEWS
// Handle a show all view
exports.nike_view_all_Page = async function(req, res) {
    try{
    thenike = await nike.find();
    res.render('nike', { title: 'nike Search Results', results: thenike });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // / Handle nike create on POST.
    exports.nike_create_post = async function(req, res) {
    console.log(req.body)
    let document = new nike();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"nike_type":"goat", "cost":12, "size":"large"}
    document.nike_type = req.body.nike_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };