var express = require('express');
var router = express.Router();
var user = require('../models/user');

router.get('/user', user.getlist);

module.exports = router;