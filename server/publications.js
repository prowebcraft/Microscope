Meteor.publish('posts', function () {
    return Posts.find({
        //Some limitations here
    });
});

Meteor.publish('comments', function (postId) {
    return Comments.find({ postId: postId });
})