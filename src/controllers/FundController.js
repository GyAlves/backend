const Fund = require("../models/Fund");

const getAllFunds = async (req, res) => {
    try {
        
        const funds = await Fund.find();
        res.status(200).json({ funds});
    } catch (error) {
        res.status(404).json({ funds });
    }
}

const createFund = async (req, res) => {
    try {

        const { name, expiration, target, description } = req.body;
        const fund = await Fund.create({ name, expiration, target, description });
        res.status(200).json({ fund });

    } catch (error) {
        res.status(400).json({ error });
    }
}

const getFund = async (req, res) => {
    try {
        const { fund_id } = req.params;

        const fund = await Fund.findOne({ _id: fund_id });

        res.status(200).json(fund);
    } catch (error) {
        res.status(400).json({ Error: error });
    }
}

const updateFund = async (req, res) => {

    try {
        const { fund_id } = req.params;
        const { name, expiration, target, description } = req.body;

        await Fund.findByIdAndUpdate(fund_id, { name, expiration, target, description });

        res.status(200).json({ message: "Fund updated" })
    } catch (error) {
        res.status(400).json({ error })
    }

}

const deleteFund = async (req, res) => {

    try {
        const { fund_id } = req.params;

        await Fund.findByIdAndDelete(fund_id);

        res.status(200).json({ message: "Fund deleted" })

    } catch (error) {
        res.status(400).json({ error })
    }
}

module.exports = {
    getAllFunds,
    createFund,
    getFund,
    updateFund,
    deleteFund,
}