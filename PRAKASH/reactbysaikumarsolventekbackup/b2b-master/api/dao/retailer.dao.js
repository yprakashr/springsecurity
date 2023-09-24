/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable arrow-body-style */
/* eslint-disable dot-notation */
const db = require('../database/db');
const { Op } = require('sequelize');

const retailerSortSearchPaginationCount = async (pageInfo, sort, option) => {
	return db['retailer'].findAndCountAll({
		where: option,
		include: [
			{
				model: db['user'],
				as: 'user',
			},
		],
		distinct: true,
		limit: pageInfo.limit,
		offset: pageInfo.skip,
		order: [sort],
	});
};

module.exports = {
	retailerSortSearchPaginationCount,
};
