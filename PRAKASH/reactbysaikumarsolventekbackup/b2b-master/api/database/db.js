/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);
const Sequelize = require('sequelize');
const dbConfig = require('./dbConfig');

const config = {
	host: dbConfig.db_host,
	port: dbConfig.db_port,
	dialect: dbConfig.db_dialect || 'postgres',
	operatorsAliases: 0,
	define: {
		freezeTableName: false,
		underscored: true,
		undesrcoredAll: true,
		timestamps: true,
	},
	pool: {
		max: dbConfig.db_pool.max,
		min: dbConfig.db_pool.min,
		acquire: dbConfig.db_pool.acquire,
		idle: dbConfig.db_pool.idle,
	},
	// eslint-disable-next-line no-unused-vars
	logging(str) {
		// console.log(str);
	},
};
const sequelize = new Sequelize(
	dbConfig.db_name,
	dbConfig.db_user_name,
	dbConfig.db_password,
	config
);

const db = {};
fs.readdirSync(path.join(__dirname, 'models'))
	.filter(
		(file) =>
			file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
	)
	.forEach((file) => {
		// eslint-disable-next-line import/no-dynamic-require
		const model = require(path.join(__dirname, 'models', file))(
			sequelize,
			Sequelize.DataTypes
		);
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName, i) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
