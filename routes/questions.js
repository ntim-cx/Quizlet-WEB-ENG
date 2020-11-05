var express = require('express');
var router = express.Router();

let questions = require("../controllers/questions")


/* GET login. */

router.get('/',questions.index)
router.post('/addAction', questions.addAction)
module.exports = router; 