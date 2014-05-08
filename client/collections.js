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
 * Schema version 1
 *   theme     : string
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
Themes.timestampable();
Themes.autoIncrementable('voteId');
Themes.softRemovable();


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
Themes.timestampable();
Themes.autoIncrementable('commentId');
Themes.softRemovable();


// subscribe to all of the things
Meteor.subscribe('themes');
Meteor.subscribe('votes');
Meteor.subscribe('comments');
Meteor.subscribe('users');
Meteor.subscribe('userPresence');
