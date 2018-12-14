const ListItem = require('../models/listItem');
const Comment = require('../models/comment');

module.exports = function(app) {
  ///POST: creates a new comment
  app.post('/listitems/:listitemId', (req, res) => {
    const comment = new Comment(req.body);
    comment.save().then(comment => {
      return ListItem.findById(req.params.listitemId)
    }).then(listItem => {
      listItem.comments.unshift(comment);
      listItem.save()
      return res.redirect(`/listitems/${req.params.listitemId}`)
    }).catch(err => {
      console.log(err);

    })
  })


  app.delete('/listitems/:listitemId/comments/:id', (req, res) => {
    Comment.findOneAndRemove({ _id: req.params.id}).then(comment => {
      console.log('Comment was deleted');
      return res.redirect(`/listitems/${req.params.listitemId}`);
    }).catch(err => {
      console.log(err);

    })
  })

}
