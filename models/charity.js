const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/charity-donate', {useNewUrlParser: true});

const CharitySchema = new Schema ({
  name: { type: String, required: true },
  description: { type: String, required: true },
  totalFundingGoal: { type: String, required: true },
  projectProgress: { type: String, default: 0 },
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
});

module.exports = mongoose.model('Charity', CharitySchema);
