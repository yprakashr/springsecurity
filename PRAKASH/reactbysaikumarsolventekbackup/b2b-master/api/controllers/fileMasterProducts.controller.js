const csv = require("csvtojson");
const fs = require("fs");
const { Op } = require("sequelize");
const {
  create,
  updatById,
  findById,
  findSortSearchPaginationCount,
  deleteById,
  bulkCreate,
  findAll,
} = require("../dao/common.dao");
const APIError = require("../utility/ApiError");
const {
  handleSuccessResponse,
  handleSuccessUploadResponse,
} = require("../utility/handleResponse");
const {
  makePageObject,
  getSort,
  searchAllColumn,
  getSortSearchDrugs,
} = require("../helpers/sortSearchPagination");

function validateCsvData(rows) {
  const dataRows = rows.slice(1, rows.length); //ignore header at 0 and get rest of the rows
  for (let i = 0; i < dataRows.length; i++) {
    const rowError = validateCsvRow(dataRows[i]);
    if (rowError) {
      return `${rowError} on row ${i + 1}`;
    }
  }
  return;
}

function validateCsvRow(row) {
  if (!row[0]) {
    return "invalid productName" + row[0];
  } else if (!row[1]) {
    return "invalid productSku";
  } else if (!Number.isInteger(Number(row[2]))) {
    return "invalid ndcNumber";
  } else if (!Number.isInteger(Number(row[3]))) {
    return "productComposition";
  } else if (!Number.isInteger(Number(row[4]))) {
    return "productManufacturer";
  } else if (!row[5]) {
    return "productStrength";
  } else if (!row[6]) {
    return "productDescription";
  } else if (!row[7]) {
    return "productImage";
  } else if (!row[8]) {
    return "productUom";
  } else if (!Number.isInteger(Number(row[9]))) {
    return "maxRetailPrice";
  } else if (!Number.isInteger(Number(row[10]))) {
    return "priceToSell";
  } else if (!Number.isInteger(Number(row[11]))) {
    return "productTax";
  }
  return;
}

const uploadCsv = async (req, res, next) => {
  try {
    let fileRows = [];
    const { path } = req.files.files;
    const jsonArray = await csv()
      .fromFile(path)
      .on("data", function (data) {
        fileRows.push(data);
      })
      .on("end", function () {
        fs.unlinkSync(path);
      });
    const validationError = validateCsvData(fileRows);
    if (validationError) {
      return res.status(403).json({ error: validationError });
    }
    let errMsg = validationError;
    await bulkCreate("masterProduct", jsonArray);
    return handleSuccessUploadResponse(
      res,
      jsonArray,
      "master products csv file upload successfully",
      errMsg
    );
  } catch (error) {
    next(error);
  }
};

const exportMasterProducts = async (_req, res, next) => {
  try {
    let temp = [];
    const masterProducts = await findAll("masterProduct");
    masterProducts.forEach((ele) => {
      temp.push(ele.dataValues);
    });
    fs.writeFile("data.csv", csv.parse(temp), function (err, data) {
      if (err) {
        throw err;
      }
      return handleSuccessResponse(
        res,
        data,
        "Master product exported successfully"
      );
    });
  } catch (error) {
    next(error);
  }
};

const createMasterProducts = async (req, res, next) => {
  try {
    const { Drug_Name, price } = req.body;
    const data = {
      Drug_Name,
      price,
    };
    await create("dummy", data);
    return handleSuccessResponse(
      res,
      data,
      "Master product created successfully"
    );
  } catch (error) {
    next(error);
  }
};

const getMasterProducts = async (req, res, next) => {
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

const getOneMasterProducts = async (req, res, next) => {
  try {
    const { id } = req.query;
    const getMasterProduct = await findById("masterProduct", id);
    return handleSuccessResponse(
      res,
      getMasterProduct,
      "Master Product details"
    );
  } catch (error) {
    next(error);
  }
};

const updateMasterProducts = async (req, res, next) => {
  try {
    const { id } = req.body;
    delete req.body.id;
    await updatById("masterProduct", id, req.body);
    return handleSuccessResponse(
      res,
      {},
      "Master product updated successfully"
    );
  } catch (error) {
    next(error);
  }
};

const deleteMasterProduct = async (req, res, next) => {
  try {
    const { id } = req.query;
    await deleteById(id, "masterProduct");
    return handleSuccessResponse(res, {}, "Record deleted successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  uploadCsv,
  exportMasterProducts,
  createMasterProducts,
  getMasterProducts,
  getOneMasterProducts,
  updateMasterProducts,
  deleteMasterProduct,
};
