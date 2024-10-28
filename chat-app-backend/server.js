const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const bodyParser = require('body-parser');
const messagesRouter = require('./routes/messages');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use(bodyParser.json());
app.use('/api/messages', messagesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
