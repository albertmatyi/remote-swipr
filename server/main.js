var imgs = ['https://lh5.googleusercontent.com/-W63iQezK_LY/UnDPn8HjvvI/AAAAAAAAOmk/t9hD-3m2V7M/w958-h539-no/1.jpg', 'https://lh5.googleusercontent.com/-M7a1E3X5uLc/UnDPnSgx25I/AAAAAAAAOmc/IMPvwIGajII/w958-h599-no/2.jpg', 'https://lh6.googleusercontent.com/-ml_rylshIqM/UnDPod2aDnI/AAAAAAAAOmo/2Oi1FI7Zf6A/w958-h599-no/3.jpg', 'https://lh6.googleusercontent.com/-8afzev00KA4/UnDPpm6Vp4I/AAAAAAAAOm4/2wBkx8MfDLA/w958-h599-no/4.jpg', 'https://lh4.googleusercontent.com/-aNjkWVd45MA/UnDPpDxLZxI/AAAAAAAAOm0/COsfBAHg6Ng/w958-h539-no/5.jpg', 'https://lh3.googleusercontent.com/-qIfu9nbVhRk/UnDPtg8qzSI/AAAAAAAAOnI/jrWAH2nsbZE/w958-h638-no/6.jpg', 'https://lh6.googleusercontent.com/-GZTjxE6TX4Q/UnDPsWBog3I/AAAAAAAAOnA/KbBEdD_3JD4/w958-h599-no/8.jpg', 'https://lh3.googleusercontent.com/-YdN3Y95BrO8/UnDPuh08jVI/AAAAAAAAOnQ/hiyVg3k3Wiw/w958-h539-no/9.jpg', 'https://lh3.googleusercontent.com/--BYXrh1c23I/UnDPncHbsdI/AAAAAAAAOmY/jOQNVW9UJ9E/w958-h539-no/10.jpg'];

Meteor.startup(function() {
	Images.remove({});

	var fs = Npm.require('fs');

	for (var i = imgs.length - 1; i >= 0; i--) {
		Images.insert({path: imgs[i]});
	};

	return Meteor.methods({
		removeAllEvents: function() {
			return EventMessages.remove({});
		}
	});
});

