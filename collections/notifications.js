Notifications = new Meteor.Collection('notifications');

Notifications.allow({
    update: ownsDocument,
    remove: ownsDocument
});

createCommentNotification = function (commentData) {
    var postData = Posts.findOne(commentData.postId);
    if (commentData.userId != postData.userId) {
        Notifications.insert({
            userId: postData.userId,
            commentId: commentData._id,
            postId: postData._id,
            commenterName: commentData.author,
            read: false
        });
    }
}