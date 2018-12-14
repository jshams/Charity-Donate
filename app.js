const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// solves heroku error
const port = process.env.PORT || 5000;
// database connection here instead of it's own data folder.
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/charity-donate');

const app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const charityProject = require('./controllers/charityProject');
const category = require('./controllers/category');

// setup controllers
charityProject(app);
category(app);

app.listen(5000, console.log('listening on port 5000!'))
