const retailer = [
  "fullName",
  "storeName",
  "representativeName",
  "storeAddress",
  "storeCity",
  "storeZip",
  "storePhone",
  "$user.email$",
  "$user.user_type$",
  "$user.mobile_no$",
];
const wholesaler = [
  "fullName",
  "address",
  "city",
  "state",
  "zip",
  "$user.email$",
  "$user.user_type$",
  "$user.mobile_no$",
];
const fileMasterProduct = [
  "drug__name",
  // 'strength',
  "strength__unit_of__measure",
  "n_d_c__u_p_c__h_r_i",
  // 'Descriptor',
  // 'Manufacture',
];
const fileMasterProductDrug = ["drug__name"];

const fileMasterProductNdc = ["n_d_c__u_p_c__h_r_i"];

const fileMasterProductDesc = ["Descriptor"];

const wholesalerInventory = [
  "ndc",
  "stock",
  "weighted_average_cost",
  "Drug_Name",
  "Dosage_Form",
  "Strength",
  "Strength_Unit_of_Measure",
  "Generic_Product_Identifier",
  "New_Drug_Descriptor_Identifier",
  "NDC_UPC_HRI",
  "manufacturer",
];
const searchColumn = {
  fileMasterProduct,
  retailer,
  wholesaler,
  wholesalerInventory,
  fileMasterProductDrug,
  fileMasterProductDesc,
  fileMasterProductNdc,
};

module.exports = {
  searchColumn,
};
