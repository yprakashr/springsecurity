/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
const apiErrorhandler = (err, req, res, next) => {
	if (err.isApiError) {
		res.status(err.code).json({
			statusCode: err.code,
			message: err.message,
		});
		return;
	}
	const errorCode = isNaN(err.code) ? 400 : err.code;
	res.status(errorCode).json({
		statusCode: errorCode,
		message: err.message,
	});
};

module.exports = apiErrorhandler;
