const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const img = new Schema({
    path: {type: String},
    created_at: {type: Date, default: Date.now}
});

module.exports = model('Img', img);