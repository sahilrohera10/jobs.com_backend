const express = require("express");
const companycntrl = require("../controllers/companyCntlr");
const companyRouter = express.Router();

companyRouter.get("/getCompanyDetails/:company_id" , companycntrl.companyDetails);
companyRouter.put("/editCompanyDetails" , companycntrl.editCompanyDetails);

module.exports = companyRouter