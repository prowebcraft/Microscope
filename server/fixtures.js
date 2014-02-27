if (Posts.find().count() === 0) {

    var now = new Date().getTime();
    //Create sample users
    var putinId = Meteor.users.insert({ profile: { name: "Vladimir Putin" }});
    var putinProfile = Meteor.users.findOne(putinId);
    var medvedevId = Meteor.users.insert({ profile: { name: "Dmitriy Medvedev"}});
    var medvedevProfile = Meteor.users.findOne(medvedevId);

    var post1 = Posts.insert({
        title: 'Хроника событий на Украине',
        userId: putinId,
        author: putinProfile.profile.name,
        url: 'http://russian.rt.com/article/22855',
        submitted: now - 7 * 3600 * 1000,
        commentsCount: 1
    });

    Comments.insert({
        postId: post1,
        userId: putinId,
        author: putinProfile.profile.name,
        submitted: now - 5 * 3600 * 1000,
        body: 'Жуткие вещи творятся, господа! Свободу Крыму!'
    });

    var post2 = Posts.insert({
        title: 'LifeNews',
        userId: medvedevId,
        author: medvedevProfile.profile.name,
        url: 'http://lifenews.ru',
        submitted: now - 1 * 3600 * 100,
        commentsCount: 1
    });

    Comments.insert({
        postId: post2,
        userId: medvedevId,
        author: medvedevProfile.profile.name,
        submitted: now - 2 * 3600 * 1000,
        body: 'Смотрю новости!'
    });


    console.log('Loaded test data to databse');
}

if (Comments.find().count() === 0) {
}