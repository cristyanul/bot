const express = require('express');//Set up the express module
const app = express();
const router = express.Router();
const path = require('path')//Include the Path module

//Set up the Express router
router.get('/', function(req, res){

});
app.use('/', router);
const port = 3000;
app.listen(port, () => console.log(`Bot running on http://localhost:${port}`));