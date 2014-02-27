Meteor.publish('posts', function(){
   return Posts.find( { 
      //Some limitations here
   } );
});

Meteor.publish('comments', function() {
    return Comments.find();
})