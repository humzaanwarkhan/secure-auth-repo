const express = require('express');
const {testEndpoint} = require('../controllers/test.controller.js')

const router = express.Router();

router.get('/test', testEndpoint);

module.exports = router;