(function () {
	'use strict';
	Template.eventMessage.messages = function () {
		return EventMessages.find({});
	}

	var sendEvent = function(ev) {
		ev.preventDefault();
		EventMessages.insert({'type': ev.type});
	};

	var initialized = false;

	var initTabletMode = function () {
		if (initialized) {
			return;
		}
		initialized = true;
	    var eTypes = ['click', 'touch', 'release', 'hold', 'tap', 'doubletap', 'dragstart', 'drag', 'dragend', 'dragleft', 'dragright', 'dragup', 'dragdown', 'swipe', 'swipeleft', 'swiperight', 'swipeup', 'swipedown', 'transformstart', 'transform', 'transformend', 'rotate', 'pinch', 'pinchin', 'pinchout'];
	    
	    var ht = $('.hero-unit').hammer();

	    for (var i = eTypes.length - 1; i >= 0; i--) {
	    	var eType = eTypes[i];
	    	console.log('assigning handler for: ' + eType);
	    	ht.on(eType, sendEvent);
	    };
	};

	var del_events = function () {
		Meteor.call('removeAllEvents');
	};

	$(document).ready(function() {
		$('#start-tablet').on('click', initTabletMode);
		$('#reset').on('click', del_events);
		$('#start-screen').on('click', function () {
			Meteor.publish('shoot', {'shit': 3});
		});
		
		Meteor.subscribe('shoot', function (args) {console.log(args);});
	});
})();