var express = require('express');
var router = express.Router();
var controller = require('../controllers/index.controller');

/* GET home page. */
router.get('/', controller);

module.exports = router;
