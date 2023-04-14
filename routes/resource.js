var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var nike_controller = require('../controllers/nike');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// nike ROUTES ///
// POST request for creating a nike.
router.post('/nike', nike_controller.nike_create_post);
// DELETE request to delete nike.
router.delete('/nike/:id', nike_controller.nike_delete);
// PUT request to update nike.
router.put('/nike/:id', nike_controller.nike_update_put);
// GET request for one nike.
router.get('/nike/:id', nike_controller.nike_detail);
// GET request for list of all nike items.
router.get('/nike', nike_controller.nike_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"nike", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};