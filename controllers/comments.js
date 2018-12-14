const Charity = require('../models/charity');
const Comment = require('../models/comment');


module.exports = function (app) {

    // GET new comment form
    app.get('/charities/:charityId/comments/new', (req, res) => {
        res.render('comment-new', { charityId: req.params.charityId });
    });

    // CREATE comment
    app.post('/charities/:charityId/comments', (req, res) => {
        const newComment = new Comment(req.body);
        newComment.save().then(() => {
            Charity.findByIdAndUpdate(req.params.charityId, { $push: { comments: newComment } }).then(() => {
                res.redirect(`/charities/${req.params.charityId}`);
            });
        });
    });

    // GET update form
    app.get('/charities/:charityId/comments/:id/update', (req, res) => {
        Comment.findById(req.params.id).then(comment => {
            res.render('comment-edit', { charityId: req.params.charityId, comment: comment });
        });
    });

    // UPDATE comment
    app.patch('/charities/:charityId/comments/:id', (req, res) => {
        Comment.findByIdAndUpdate(req.params.id, req.body).then(() => {
            res.redirect(`/charities/${req.params.charityId}/`);
        });
    });

    // DELETE comment
    app.delete('/charities/:charityId/comments/:id', (req, res) => {
        Comment.findByIdAndDelete(req.params.id).then(() => {
            Charity.findByIdAndUpdate(req.params.charityId, { $pull: { comments: req.params.id }}).then(() => {
                res.redirect(`/charities/${req.params.charityId}/`);
            });
        });
    });

}