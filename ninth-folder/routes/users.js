var express = require('express');
var router = express.Router();
var controller = require('../controllers/users.controller');

/* GET users listing. */
router.get('/', controller);

module.exports = router;
