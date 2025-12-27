const express = require('express');
const { registerEndpoint } = require('../controllers/auth.controller');
const { loginEndpoint } = require('../controllers/auth.controller');

const router = express.Router();

router.post('/register', registerEndpoint);
router.post('/login', loginEndpoint);

module.exports = router;