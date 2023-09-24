/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */

const { Op } = require("sequelize");
const {
  create,
  updatById,
  findById,
  findSortSearchPaginationCount,
  deleteById,
  createOrUpdateInventory,
  findByCondition,
  findAll,
  bulkCreate,
} = require("../dao/common.dao");
const APIError = require("../utility/ApiError");
const {
  handleSuccessResponse,
  handleErrorResponse,
} = require("../utility/handleResponse");
const {
  makePageObject,
  getSort,
  searchAllColumn,
  getSortSearchDrugs,
} = require("../helpers/sortSearchPagination");
const csv = require("csvtojson");
const {
  WHOLESALER_INVENTORY_UNIQUE_CHECK,
} = require("../constant/sucessMessage");
const {
  bulkDeleteInvontory,
  fetchInventory,
  wholesalerfindSortSearchPaginationCount,
} = require("../dao/wholesalerInventory");

const createWholesalerInventory = async (req, res, next) => {
  try {
    const {
      ndc,
      stock,
      weighted_average_cost,
      Drug_Name,
      Dosage_Form,
      Strength,
      // Strength_Unit_of_Measure,
      Generic_Product_Identifier,
      New_Drug_Descriptor_Identifier,
      unit__cost,
      Package_Code,
      // NDC_UPC_HRI,
      manufacturer,
      discount_percentage,
    } = req.body;
    const checkUnique = await findByCondition("wholesalerInventory", {
      NDC_UPC_HRI: ndc,
    });
    if (checkUnique !== null) {
      return handleErrorResponse(res, WHOLESALER_INVENTORY_UNIQUE_CHECK);
    } else {
      const data = {
        ndc,
        stock,
        weighted_average_cost,
        Drug_Name,
        Dosage_Form,
        Strength,
        Strength_Unit_of_Measure: Strength,
        Generic_Product_Identifier,
        New_Drug_Descriptor_Identifier,
        unit__cost,
        Package_Code,
        NDC_UPC_HRI: ndc,
        manufacturer,
        discount_percentage,
        wholesalerId: req.userInfo.wholesaler.id,
      };
      await create("wholesalerInventory", data);
      return handleSuccessResponse(
        res,
        data,
        "Wholesalerinventory created successfully"
      );
    }
  } catch (error) {
    next(error);
  }
};

const importWholesalerInventory = async (req, res, next) => {
  try {
    const { path } = req.files.files;
    const jsonArray = await csv().fromFile(path);
    // console.log("jsonArray", jsonArray);
    // for (const element of jsonArray) {
    //   const drugs = await findByCondition("file_master_products", {
    //     n_d_c__u_p_c__h_r_i: parseInt(element.ndc),
    //   });

    //   const data = {
    //     ndc: element.ndc,
    //     stock: element.stock,
    //     manufacturer: element.manufacturer,
    //     weighted_average_cost: element.weighted_average_cost,
    //     Package_Code: element.package_code,
    //     unit__cost: drugs.unit_cost,
    //     New_Drug_Descriptor_Identifier: element.description,
    //     Drug_Name: drugs.drug__name,
    //     Dosage_Form: drugs.dosage__form,
    //     Strength_Unit_of_Measure: drugs.strength__unit_of__measure,
    //     NDC_UPC_HRI: drugs.n_d_c__u_p_c__h_r_i,
    //     wholesalerId: req.userInfo.wholesaler.id,
    //   };

    //   await createOrUpdateInventory(data, "wholesalerInventory", {
    //     ndc: element.ndc,
    //   });
    // }
    const wholesalerInventoryPayload = jsonArray.map((obj2, i) => ({
      ...obj2,
      wholesalerId: req.userInfo.wholesaler.id,
      NDC_UPC_HRI: obj2.ndc,
      Strength_Unit_of_Measure: obj2.Strength,
    }));

    await bulkCreate("wholesalerInventory", wholesalerInventoryPayload);
    return handleSuccessResponse(
      res,
      {},
      "Wholesaler Inventory uploaded successfully"
    );
  } catch (error) {
    next(error);
  }
};

const getWholesalerInventory = async (req, res, next) => {
  try {
    const { query } = req;
    const pageInfo = makePageObject(query);
    const sort = getSort(query, "wholesalerInventory");
    const { search } = query;
    const option = searchAllColumn(search, "wholesalerInventory");
    option.wholesaler_id = req.userInfo.wholesaler.id;
    const wholesalerInventory = await wholesalerfindSortSearchPaginationCount(
      pageInfo,
      sort,
      option,
      "wholesalerInventory"
    );
    return handleSuccessResponse(
      res,
      wholesalerInventory,
      "Wholesaler Inventory fetched successfully"
    );
  } catch (error) {
    next(error);
  }
};

const getOneWholesalerInventory = async (req, res, next) => {
  try {
    const { id } = req.query;
    const wholesalerInventory = await findById("wholesalerInventory", id);
    return handleSuccessResponse(
      res,
      wholesalerInventory,
      "Wholesaler Inventory fetched successfully"
    );
  } catch (error) {
    next(error);
  }
};

const updateWholesalerInventory = async (req, res, next) => {
  try {
    const { id } = req.body;
    delete req.body.id;
    await updatById("wholesalerInventory", id, req.body);
    return handleSuccessResponse(
      res,
      {},
      "Wholesaler Inventory updated successfully"
    );
  } catch (error) {
    next(error);
  }
};

const deletewholesalerInventory = async (req, res, next) => {
  try {
    const { deleteId } = req.body;
    await bulkDeleteInvontory("wholesalerInventory", {
      id: { [Op.in]: deleteId },
    });
    return handleSuccessResponse(res, {}, "Record deleted successfully");
  } catch (error) {
    next(error);
  }
};

const searchInventory = async (req, res, next) => {
  try {
    const { query } = req;
    const pageInfo = makePageObject(query);
    const sort = getSortSearchDrugs(query, "wholesalerInventory");
    let { search, searchType } = query;
    let option = {};
    switch (searchType) {
      case "auto":
        option = searchAllColumn(search, "wholesalerInventory");
        break;
      // case "drugName":
      //   option = searchAllColumn(search, "fileMasterProductDrug");
      //   break;
      // case "ndc/upc":
      //   option = searchAllColumn(search, "fileMasterProductNdc");
      //   break;
      // case "description":
      //   option = searchAllColumn(search, "fileMasterProductDesc");
      //   break;
      default:
        option = searchAllColumn(search, "wholesalerInventory");
    }
    option.unit__cost = { [Op.gt]: 0 };
    const masterProduct = await findSortSearchPaginationCount(
      pageInfo,
      sort,
      option,
      "wholesalerInventory"
    );
    return handleSuccessResponse(
      res,
      masterProduct,
      "Master product fetched successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createWholesalerInventory,
  getWholesalerInventory,
  getOneWholesalerInventory,
  updateWholesalerInventory,
  deletewholesalerInventory,
  importWholesalerInventory,
  searchInventory,
};
