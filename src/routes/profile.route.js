const express = require('express');
const {authGuard} = require('../middlewares/auth.middleware.js');

const router = express.Router();

router.get('/profile', authGuard, (req, res) =>{
    res.send(`Hello ${req.user.email}`);
});

module.exports = router;