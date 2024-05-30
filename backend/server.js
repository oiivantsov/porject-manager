const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { dbURL, dbOptions } = require('./config/db');

const projectRoutes = require('./routes/projects');


const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(dbURL, dbOptions)
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

// Server Run
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
