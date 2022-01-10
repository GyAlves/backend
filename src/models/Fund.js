const mongoose = require('mongoose');

const FundSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must have name"],
        maxLength: 30
    },
    expiration: {
        type: String,
    },
    target: {
        type: Number,
        require: [true, "Must have a target value"]
    },
    description: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Fund", FundSchema)