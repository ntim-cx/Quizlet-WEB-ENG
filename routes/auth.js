var express = require('express');
var router = express.Router();

let auth = require("../controllers/auth")


/* GET login. */
router.get('/', auth.index);
router.get('/login',auth.index)
router.post('/logaction', auth.submit_login)
router.get('/register',auth.signup)
router.post('registeraction',auth.submit_register)
module.exports = router; 