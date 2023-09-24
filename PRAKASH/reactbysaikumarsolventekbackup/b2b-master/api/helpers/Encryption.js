/* eslint-disable func-names */
const crypto = require('crypto');
const config = require('../database/dbConfig');

// Encrypt the data using AES256 SHA Algorithm
const encryptData = function (data) {
	if (data) {
		try {
			const cipher = crypto.createCipher('aes256', config.encryptionKey);
			return cipher.update(data, 'utf8', 'base64') + cipher.final('base64');
		} catch (exception) {
			return data;
		}
	} else {
		return null;
	}
};

// Decrypt the data using AES256 SHA Algorithm
const decryptData = function (data) {
	if (data) {
		try {
			const decipher = crypto.createDecipher('aes256', config.encryptionKey);
			return decipher.update(data, 'base64', 'utf8') + decipher.final('utf8');
		} catch (exception) {
			return data;
		}
	} else {
		return null;
	}
};

module.exports.encryptData = encryptData;
module.exports.decryptData = decryptData;
