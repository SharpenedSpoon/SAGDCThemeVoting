
Themes = new Meteor.Collection('themes');
Meteor.publish('themes', function() {
	return Themes.find();
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
