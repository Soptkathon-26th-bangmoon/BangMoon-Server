var express = require('express');
var router = express.Router();
var projectController = require('../controllers/projectController');

router.get('/list', projectController.getlist);

module.exports = router;
