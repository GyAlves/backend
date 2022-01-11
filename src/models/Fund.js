const mongoose = require('mongoose');

const FundSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Must have name"],
        maxLength: 30
    },
    author: {
        type: String
    },
    expiration: {
        type: String,
    },
    target: {
        type: Number,
        require: [true, "Must have a target value"]
    },
    current: {
        type: Number,
        default: 0
    },
    supporters: {
        type: Number,
        default: 0
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