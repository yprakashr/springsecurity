/* eslint-disable import/no-unresolved */
const { createLogger, format, transports } = require('winston');

// Create a Error Log on the go provided some error is encountered
module.exports = createLogger({
	transports: [
		new transports.File({
			filename: 'error.log',
			handleExceptions: true,
			format: format.combine(
				format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
				format.align(),
				format.printf(
					(info) => `${info.level}: ${[info.timestamp]}: ${info.message}`
				)
			),
		}),
	],
});
