#
# Get the list of themes from the Themes collection
#
Template.themesList.themes = () ->
	return Themes.find()
