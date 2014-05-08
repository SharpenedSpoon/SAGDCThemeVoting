/*
* These are "global" collection declarations, made in javascript instead
* of coffeescript so that they can be called anywhere,
* and are not wrapped inside the coffeescript helper wrapper
* thingies. Whatever they're called. Yes, I copy pasted this
* block comment from helper-functions.js, what do you want?!
*/


/*
 * Themes
 *
 * Schema version 2
 *   theme     : string
 *   username  : string
 *   (themeId) : int [[automatic]]
 */
Themes = new Meteor.Collection('themes');
Themes.timestampable();
Themes.autoIncrementable('themeId');
Themes.softRemovable();


/*
 * Votes
 *
 * Schema version 1
 *   username : string
 *   value    : int
 *   (voteId) : int [[automatic]]
 */
Votes = new Meteor.Collection('votes');
Votes.timestampable();
Votes.autoIncrementable('voteId');
Votes.softRemovable();


/*
* Comments
*
* Schema version 1
*   username    : string
*   comment     : string
*   themeId     : int
*   (commentId) : int [[automatic]]
*/
Comments = new Meteor.Collection('comments');
Comments.timestampable();
Comments.autoIncrementable('commentId');
Comments.softRemovable();


// subscribe to all of the things
Meteor.subscribe('themes');
Meteor.subscribe('votes');
Meteor.subscribe('comments');
Meteor.subscribe('users');
Meteor.subscribe('userPresence');


/*
 * Set up the rules for when users can do
 * CRUD methods on collections
 */
Themes.allow({
    insert: function() {
        return true;
    }
});

Votes.allow({
    insert: function(userId, doc) {
        // user must be logged in, doc must be owned by the user
        return (userId && doc.owner == userId);
    }
});

Comments.allow({
    insert: function(userId, doc) {
        // user must be logged in, doc must be owned by the user
        return (userId && doc.owner == userId);
    }
});
