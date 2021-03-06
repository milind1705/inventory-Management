const express = require('express');
const router = express.Router();
const admin = require('../controller/adminController');

router.post('/signup', admin.signup);
router.post('/login', admin.login);

module.exports = router;