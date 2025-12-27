const express = require('express');
const {healthEndpoint} = require('../controllers/health.controller.js');

const router = express.Router();

router.get('/health', healthEndpoint);

module.exports = router;