var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

// [GET] /user
router.get('/', userController.getUserName);
router.get('/project/list', userController.getUserList);
router.get('/complete', userController.getCompleteProject);

module.exports = router;