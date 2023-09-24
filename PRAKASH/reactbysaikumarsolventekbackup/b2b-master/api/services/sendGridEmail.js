/* eslint-disable camelcase */
/* eslint-disable import/newline-after-import */
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (toEmail, fromEmail, fromName, subject, html) => {
	const regMessage = {
		to: toEmail,
		from: fromEmail,
		fromname: fromName,
		// eslint-disable-next-line object-shorthand
		subject: subject,
		// eslint-disable-next-line object-shorthand
		html: html,
	};
	sgMail.send(regMessage);
};
const sendOTPEmail = (toEmail, first_name, otp) => {
	const regMessage = {
		to: toEmail,
		from: 'developer@b2b.com',
		fromname: 'B2B',
		subject: 'B2B Notification: Welcome to B2B',
		html:
			// eslint-disable-next-line prefer-template
			'Dear ' +
			first_name +
			',<br /><br /> Thanks for registering with B2B. <br /><br />Please verify your account using OTP - <strong>' +
			otp +
			'</strong>.<br /><br />Note: The OTP will expire in 10 minutes.<br /><br /> Regards,<br />B2B',
	};
	sgMail.send(regMessage);
};

module.exports = {
	sendEmail,
	sendOTPEmail,
};
