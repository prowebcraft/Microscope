Meteor.publish('posts', function(){
   return Posts.find( { 
      //Some limitations here
   } );
});