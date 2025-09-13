const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});


module.exports = {
    Resource: mongoose.model('Resource', resourceSchema),
    Author: mongoose.model('Author', authorSchema)
};
