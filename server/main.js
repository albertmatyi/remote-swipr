Meteor.startup(function() {

	return Meteor.methods({
		removeAllEvents: function() {
			return EventMessages.remove({});
		}
	});
});