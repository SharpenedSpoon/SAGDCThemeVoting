
/*
 * When an account is created, assign it a username and an email
 * for easy accessing later
 */
Accounts.onCreateUser(function(options, user) {
	user.email = user.emails[0].address;
	user.username = user.email.replace(/@.*/, '');
	return user;
});
