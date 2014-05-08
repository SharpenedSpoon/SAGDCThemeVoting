#
# Watch for a button click or the Enter button
# being pressed and then (possibly) insert a new comment
#
Template.newComment.events {
	'keyup #newCommentContainer': (event) ->
		if event.which == 13 # 13 = Enter
			maybeAddComment $(event.target).find('#newCommentInput'), this
	,
	'keyup #newCommentInput': (event) ->
		if event.which == 13 # 13 = Enter
			maybeAddComment $(event.target), this
	,
	'click #postComment': (event) ->
		maybeAddComment $(event.target).parent().find('#newCommentInput'), this
}

#
# possibly add a comment to the Comments collection
#
# ...using the Meteor.call method for allows/denys,
# as seen here:
# https://www.openshift.com/blogs/day-15-meteor-building-a-web-app-from-scratch-in-meteor
#
maybeAddComment = (commentElem, themeObject) ->
	newComment = commentElem.val()
	if newComment && newComment != ''
		Meteor.call 'addComment', newComment, Meteor.user().username, themeObject.themeId
		newComment.val('')
