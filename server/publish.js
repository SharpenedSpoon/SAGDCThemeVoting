
Themes = new Meteor.Collection('themes');
Themes.timestampable();
Themes.autoIncrementable('themeId');
Themes.softRemovable();

Votes = new Meteor.Collection('votes');
Votes.timestampable();
Votes.autoIncrementable('voteId');
Votes.softRemovable();

Comments = new Meteor.Collection('comments');
Comments.timestampable();
Comments.autoIncrementable('commentId');
Comments.softRemovable();


Meteor.publish('themes', function() {
	return Themes.find();
});
Meteor.publish('votes', function() {
	return Votes.find();
});
Meteor.publish('comments', function() {
	return Comments.find();
});



// TODO this is not a secure way to do this!
Meteor.publish('users', function() {
	return Meteor.users.find();
});



Meteor.publish('userPresence', function() {
	// Setup some filter to find the users your user
	// cares about. It's unlikely that you want to publish the
	// presences of _all_ the users in the system.

	// If for example we wanted to publish only logged in users we could apply:
	// filter = { userId: { $exists: true }};
	var filter = {};

	return Presences.find(filter, {fields: {state: true, userId: true}});
});
