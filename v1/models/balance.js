const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const BalanceSchema = new Schema({
    balance: Number,
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Balance', BalanceSchema);