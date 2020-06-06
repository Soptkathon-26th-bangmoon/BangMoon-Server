var express = require('express');
var router = express.Router();

router.use('/project',require('./project'));

module.exports = router;
