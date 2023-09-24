const error = require('./errors');

const unhandledRequest = () => (req, res, next) => {
	if (!res.headersSent) {
		// Handle unhandled requests
		return res.status(501).json({
			code: 501,
			message: error[501],
		});
	}
	return next();
};

module.exports = unhandledRequest;
