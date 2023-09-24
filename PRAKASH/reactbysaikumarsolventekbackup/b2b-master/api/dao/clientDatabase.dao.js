/* eslint-disable arrow-body-style */
/* eslint-disable dot-notation */
const db = require('../database/db')['Database2'];

const findRetailerDrugDetails = async () => {
	return db.sequelize.query(
		`select * from mf2name_f a, mf2ndc_h b where a.Drug_Descriptor_Identifier=b.Drug_Descriptor_Identifier AND Item_Status_Flag = 'A'`
	);
};

module.exports = {
	findRetailerDrugDetails,
};
