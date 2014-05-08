Meteor.methods({

	addTheme: function(theme, username) {
		var themeId = Themes.insert({
			theme: theme,
			username: username
		});
		return themeId;
	}
	,
	addVote: function(value, username, themeId) {
		var voteId = Votes.insert({
			username: username,
			value: value,
			themeId: themeId
		});
		return voteId;
	}
	,
	addComment: function(comment, username, themeId) {
		var commentId = Comments.insert({
			username: username,
			comment: comment,
			themeId: themeId
		});
		return commentId;
	}
});
