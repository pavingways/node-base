/* /logout controller */
module.exports = function () {
	'use strict';

	return function (req, res) {
		req.session.messages.index = 'Successfully Logged Out';

		// call passport's logout() method on req
		req.logout();

		// redirect home
		res.redirect('/');
	};

};
