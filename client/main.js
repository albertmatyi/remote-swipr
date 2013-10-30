(function () {
	'use strict';

	Template.imageSlider.images = function () {
		return Images.find({});
	}

	var sendEvent = function(ev) {
		ev.preventDefault();
		console.log(ev);
		EventMessages.insert({type: ev.type});
	};

	var initialized = false;

	var initTabletMode = function () {
		if (initialized) {
			return;
		}
		initialized = true;
	    var eTypes = ['click', 'touch', 'release', 'hold', 'tap', 'doubletap', 'dragstart', 'drag', 'dragend', 'dragleft', 'dragright', 'dragup', 'dragdown', 'swipe', 'swipeleft', 'swiperight', 'swipeup', 'swipedown', 'transformstart', 'transform', 'transformend', 'rotate', 'pinch', 'pinchin', 'pinchout'];
	    
		$('.hero-unit').hide();
	    var ht = $('#slidepane').show().hammer();

	    for (var i = eTypes.length - 1; i >= 0; i--) {
	    	var eType = eTypes[i];
	    	ht.on(eType, sendEvent);
	    };
	};

	var initScreenMode = function () {
		var slider = slidr.create('imagesSlider', {
			breadcrumbs: true
		});
		slider.start();
		$('#imagesSlider').show();
		$('.hero-unit').hide();
		EventMessages.find().observe({
			'added': function (ev) {
				console.log(ev);
				EventMessages.remove(ev._id);
				switch (ev.type) {
					case 'swipeleft': slider.slide('right'); break;
					case 'swiperight': slider.slide('left'); break;
					default: 
						console.log(ev.type);
				}
			}
		});
	};

	$(document).ready(function() {
		Meteor.call('removeAllEvents');
		$('#start-tablet').on('click', initTabletMode);
		$('#start-screen').on('click', initScreenMode);
	});
})();