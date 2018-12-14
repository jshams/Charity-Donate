const Charity = require('../models/charity');

module.exports = function (app) {

    app.get('/', (req, res) => {
      // later: find all post and render index view passing in posts
      Charity.find().then((charity) => {
        console.log("charity");
        console.log(charity);
        res.render('index', {charity});
      })
    });


    app.get('/new', (req, res) => {
      res.render('new');
    });

    app.post('/new', (req, res) => {
      console.log("req.body:", req.body);
      const charity = new Charity(req.body)
      charity.save().then(() => {
          res.redirect('/');
      }).catch((err) => {
        console.log(err);
      })
    });

    app.get('/charities/:charityId', (req, res) => {
      Charity.findById(req.params.charityId).populate('comments').then(charity => {
        console.log(charity);
        res.render('charity', {charity});
      });
    });

      //get edit form
    app.get('/charities/:charityId/edit', (req, res) => {
      Charity.findById(req.params.charityId).then(charity => {
        res.render('charity-edit', {charity})
      });
    });

      //updates charity
    app.patch('/charities/:charityId/', (req, res) => {
      Charity.findById(req.params.charityId)
      .then(charity => {
        console.log("charity we're editing:", charity);
        charity.name = req.body.name;
        charity.description = req.body.description;
        charity.totalFundingGoal = req.body.totalFundingGoal;
        charity.save().then(() => {
          res.redirect('/charities/'+charity._id)
        }).catch((err) => {
          console.log(err);
        })
      });
    });

    app.delete('/charities/:charityId/', (req, res) => {
       Charity.findByIdAndRemove(req.params.charityId).then((charity) => {
         res.redirect('/');
       }).catch((err) =>{
         console.log(err)
       });
    });



}
