var express = require('express');
var router = express.Router();
var projectController = require('../controllers/projectController');

router.get('/list', projectController.getlist);
router.get('/deadline', projectController.getDeadline);
router.get('/:p_idx', projectController.getDetail);

module.exports = router;
