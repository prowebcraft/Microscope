Router.configure({
    layoutTemplate: "layout",
    loadingTemplate: 'loading',
    waitOn: function () {
        return [Meteor.subscribe('posts')];
    }
});

Router.map(function () {
    this.route('postsList', {
        path: '/'
    });
    this.route('postPage', {
        path: '/post/:_id',
        data: function () {
            return Posts.findOne(this.params._id);
        },
        waitOn: function() {
            return Meteor.subscribe('comments', this.params._id);
        }
    });
    this.route('postEdit', {
        path: '/post/:_id/edit',
        data: function () {
            return Posts.findOne(this.params._id);
        }
    });
    this.route('postSubmit', {
        path: '/submit'
    });
});

var requireLogin = function () {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
        this.stop();
    }
}

Router.before(requireLogin, { only: 'postSubmit' });
Router.before(function () {
    clearErrors()
});