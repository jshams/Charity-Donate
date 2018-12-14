const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost/to-do-list', {useNewUrlParser: true});


const CharityProject = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  totalFundingGoal: { type: String, required: true },
  projectProgress: { type: String, required: true },
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
})



module.exports = CharityProject;
