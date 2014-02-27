Comments = new Meteor.Collection('comments');

Comments.allow({
    update: ownsDocument,
    remove: ownsDocument
});

Meteor.methods({
    submitComment: function (postData) {
        var user = Meteor.user();
        if (!user)
            throw new Meteor.Error(401, 'Пожалуйста, авторизуйтесь');
        if (!postData.body || postData.body == '')
            throw new Meteor.Error(402, 'Не указано тело комментария');
        var comment = _.extend(_.pick(postData, 'body', 'postId'), {
            userId: user._id,
            author: user.username,
            submitted: new Date().getTime()
        });
        return Comments.insert(comment);
    }
});