const joi = require('joi');
const ApiError = require('../utility/ApiError');

const cartValidator = (req, _res, next) => {
	const schema = joi.object({
		itemsToCart: joi.array().required(),
		// drugName: joi.string().required(),
		// quantity: joi.number().required(),
		// ndcNumber: joi.string().required(),
		// price: joi.number().required(),
	});
	const { error } = schema.validate(req.body);
	if (error) {
		throw ApiError.badRequest(error.details[0].message);
	}
	next();
};

module.exports = {
	cartValidator,
};
