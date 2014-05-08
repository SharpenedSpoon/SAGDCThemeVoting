#
# Watch for a button click or the Enter button being hit
#
Template.newThemeInput.events {
	'keyup #newThemeContainer, keyup #newThemeInput, click #addTheme': (event) ->
		if event.which == 13 # 13 = Enter
			themeInput = $('#newTheme')
			newTheme = themeInput.val()
			if newTheme && newTheme != ''
				addTheme(newTheme)
				themeInput.val('')
}

#
# add a theme to the Themes collection
# using the Meteor.call method for allows/denys, as
# seen here:
# https://www.openshift.com/blogs/day-15-meteor-building-a-web-app-from-scratch-in-meteor
#
addTheme = (newTheme) ->
	Meteor.call 'addTheme', newTheme, Meteor.user().username
