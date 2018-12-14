const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/charity-donate', {useNewUrlParser: true});

const Category = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  fundingGoal: { type: Number, required: true },
  fundingProgress: { type: Number, default: 0 }
  // later we can add a list of people who've donated to this category.
})


module.exports = CommentSchema;
