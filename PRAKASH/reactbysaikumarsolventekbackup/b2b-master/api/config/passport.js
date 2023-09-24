/* eslint-disable func-names */
/* eslint-disable arrow-body-style */
/* eslint-disable eqeqeq */
/* eslint-disable no-else-return */
/* eslint-disable no-param-reassign */
/* eslint-disable spaced-comment */
/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable import/newline-after-import */
/* eslint-disable dot-notation */
const LocalStrategy = require('passport-local').Strategy;
const db = require('../database/db');
const User = db.user;
const Retailer = db.retailer;
const Wholesaler = db.wholesaler;
const { encryptData } = require("../helpers/Encryption")
// Passport Local Strategy to Verify and Authenticate the Session provided the user details
module.exports = function (passport) {
	// Serialize sessions
	passport.serializeUser(function (user, done) {
		done(null, user.id);
	});

	// Deserialize sessions
	passport.deserializeUser(function (id, done) {
		User.findOne({ where: { id: id } }).then(function (user) {
			if (user.id) {
				done(null, user);
			}
		});
	});

	//Use local strategy
	passport.use(
		new LocalStrategy(
			{
				usernameField: 'email',
				passwordField: 'password',
				passReqToCallback: true,
			},
			(_req, email, password, done) => {
				email = encryptData(email.toLowerCase());
				User.findOne({ where: { email } })
					.then(function (user) {
						if (!user) {
							return done(null, false, 'Invalid Email, Please check again.');
						} else if (user.password != password) {
							return done(null, false, 'Invalid password, Please check again.');
						} else if (user.status != 1) {
							return done(null, false, 'Admin Approval Required.');
						} else {
							return done(null, user);
						}
					})
					.catch(err => {
						return done(err);
					});
			}
		)
	);
};
