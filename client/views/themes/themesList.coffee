#
# Get the list of themes from the Themes collection
# and add/parse any comments or votes for that theme
#
Template.themesList.themes = () ->
	return Themes.find()
