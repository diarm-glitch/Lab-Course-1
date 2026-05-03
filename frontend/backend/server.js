const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./config/db');
const authRoutes = require('./routes/auth.routes');
const customerRoutes = require('./routes/customer.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

app.use('/customers', customerRoutes);


app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});