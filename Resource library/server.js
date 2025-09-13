require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const apiRoutes = require('./routes/routes');
const { Resource, Author } = require('./models/models');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', () => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

app.use(cors());

app.use('/api', apiRoutes);

app.listen(3000, () => console.log('Server Started'));
