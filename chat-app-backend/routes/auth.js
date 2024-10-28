const express = require('express');
const router = express.Router();

// Example route for user registration
router.post('/register', (req, res) => {
    // Handle registration logic here
    res.send('User registered');
});

// Example route for user login
router.post('/login', (req, res) => {
    // Handle login logic here
    res.send('User logged in');
});

module.exports = router;
