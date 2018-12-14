const charity = require('../models/charityProject')

module.exports = function (app) {

    app.get('/', (req, res) => {
      // later: find all post and render index view passing in posts
      res.render('index');
      // listItem.find({}).then(items => {
      //   res.render('index', { items });
      //   console.log("items:", items)
      // });
    });
    ///Returns specific todo item with comments at GET: /listitems/:id
    app.get('/listitems/:id', (req, res) => {
      listItem.findById(req.params.id).populate('comments').then(listItem => {
        res.render('item.handlebars', { listItem })
      }).catch(err => {
        console.log(err);
      })
    })

    app.post('/listitems/new', (req, res) => {
      //this will create new list item
      listItem.create(req.body)
      .then(() => {
          res.redirect('/');
      });
    });
    app.get('/listitems/:itemId/Update', (req, res) => {
      //get specific list item
      listItem.findById(req.params.itemId).then(item => {
        res.render('itemUpdate', {listItem: item});
      });
    });
    app.put('/listitems/:itemId', (req, res)=> {
      //Updates specific item
      listItem.findByIdAndUpdate(req.params.itemId, req.body).then(result => {
        res.redirect('/');
      });
    });
    app.delete('/listitems/:itemId', (req, res) => {
      //deletes specific listitem
      listItem.findByIdAndRemove(req.params.itemId).then(result => {
        res.redirect('/');
      }).catch(console.error);
    });
}
