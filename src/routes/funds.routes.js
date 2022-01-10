const express = require('express');

const fundsRouter = express.Router();

const { getAllFunds, createFund, getFund, updateFund, deleteFund } = require("../controllers/FundController");

fundsRouter.route("/").get(getAllFunds);
fundsRouter.route("/").post(createFund);
fundsRouter.route("/:fund_id").get(getFund);
fundsRouter.route("/:fund_id").patch(updateFund);
fundsRouter.route("/:fund_id").delete(deleteFund);

module.exports = fundsRouter