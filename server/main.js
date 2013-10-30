
Meteor.startup(function() {
	Images.remove({});

	var fs = Npm.require('fs');
	var imgs = fs.readdirSync('../../../../../public/imgs')
	for (var i = imgs.length - 1; i >= 0; i--) {
		Images.insert({path: 'imgs/' + imgs[i]});
	};

	return Meteor.methods({
		removeAllEvents: function() {
			return EventMessages.remove({});
		}
	});
});