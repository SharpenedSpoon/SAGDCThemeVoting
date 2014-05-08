/*
* These are "global" collection declarations, made in javascript instead
* of coffeescript so that they can be called anywhere,
* and are not wrapped inside the coffeescript helper wrapper
* thingies. Whatever they're called. Yes, I copy pasted this
* block comment from helper-functions.js, what do you want?!
*/


Themes = new Meteor.Collection('themes');
Themes.timestampable();
Themes.autoIncrementable('themeId');
Themes.softRemovable();


Meteor.subscribe('themes');
Meteor.subscribe('users');
Meteor.subscribe('userPresence');
