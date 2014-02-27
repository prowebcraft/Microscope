Template.commentForm.events({
    'submit form': function(e, template){
        e.preventDefault();

        var $body = $(e.target).find('textarea');
        var postData = {
            body: $body.val(),
            postId: template.data._id
        }

        Meteor.call('submitComment', postData, function(error, commentId) {
            if (error){
                throwError(error.reason);
            } else {
                $body.val('');
            }
        });
    }
});