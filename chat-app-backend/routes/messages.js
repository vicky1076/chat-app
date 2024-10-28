const express = require('express');
const router = express.Router();
let messages = []; // In-memory storage (for demo purposes)

router.get('/', (req, res) => {
    res.json(messages);
});

router.post('/', (req, res) => {
    const { text } = req.body;
    messages.push({ text });
    res.status(201).json({ message: 'Message sent' });
});

module.exports = router;
