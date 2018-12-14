const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author: { type: String, required: true },
    amount: { type: Number, required: true },
    content: { type: String, required: true }
});

module.exports = mongoose.model('Comment', CommentSchema);
