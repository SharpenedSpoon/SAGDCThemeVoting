Meteor.methods({
	addTheme: function(theme, username) {
		var themeId = Themes.insert({
			theme: theme,
			username: username
		});
		return themeId;
	}
});
