
#
# when the voteForTheme button is clicked,
# register a vote for that theme if the
# current user has not already cast their vote
#
Template.themeItem.events {
	'click #voteForTheme': (event) ->
		console.log this
		foundVote = Votes.findOne {
			username: Meteor.user().username,
			themeId: this.themeId
		}
		if foundVote
			console.log Meteor.user().username + ' has already voted for ' + this.theme
		else
			Meteor.call 'addVote', 1, Meteor.user().username, this.themeId
			console.log Meteor.user().username + ' voted for ' + this.theme
}


Template.themeItem.helpers {
	userHasNotYetVoted: () ->
		return (! Votes.findOne({
			themeId: this.themeId,
			username: Meteor.user().username
		}))
	voteCount: () ->
		return Votes.find({ themeId: this.themeId }).fetch().length
	votes: () ->
		return Votes.find { themeId: this.themeId }
	commentCount: () ->
		return Comments.find({ themeId: this.themeId }).fetch().length
	comments: () ->
		return Comments.find({ themeId: this.themeId }, {commentId: -1}).map (comment) ->
			comment.createdAt = comment.createdAt.toString().substr(0, 10)
			return comment
}

###
votes =
theme.voteCount = votes.length
theme.votes = votes.fetch()

comments = Comments.find { themeId: theme.themeId }
theme.commentCount = comments.length
theme.comments = comments.fetch()
###
