Template.notifications.helpers({
    notifications: function () {
        return Notifications.find({ userId: Meteor.userId() });
    },
    notificationCount: function () {
        return Notifications.find({ userId: Meteor.userId() }).count();
    }
});

Template.notification.helpers({
    notificationPostPath: function () {
        return Router.routes.postPage.path({_id: this.postId});
    }
});

Template.notification.events({
    'click a': function () {
        //Notifications.update(this._id, { $set: { read: true }});
        Notifications.remove(this._id);
    }
});