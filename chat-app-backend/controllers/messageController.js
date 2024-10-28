const Message = require('../models/Message');

// Send Message
exports.sendMessage = async (req, res) => {
    const { sender, receiver, content } = req.body;
    const message = new Message({ sender, receiver, content });
    await message.save();
    res.status(201).json(message);
};
