const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const img = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    path: {type: String},
    created_at: {type: Date, default: Date.now}
});

module.exports = model('Img', img);