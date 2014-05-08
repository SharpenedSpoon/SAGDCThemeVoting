#
# Watch for a button click or the Enter button
# being pressed and then (possibly) insert a new theme
#
Template.newThemeInput.events {
	'keyup #newThemeContainer, keyup #newThemeInput': (event) ->
		if event.which == 13 # 13 = Enter
			maybeAddTheme $('#newTheme')
	,
	'click #addTheme': (event) ->
		maybeAddTheme $('#newTheme')
}

#
# possibly add a theme to the Themes collection
#
# ...using the Meteor.call method for allows/denys,
# as seen here:
# https://www.openshift.com/blogs/day-15-meteor-building-a-web-app-from-scratch-in-meteor
#
maybeAddTheme = (themeElem) ->
	newTheme = themeElem.val()
	if newTheme && newTheme != ''
		Meteor.call 'addTheme', newTheme, Meteor.user().username
		themeElem.val('')
