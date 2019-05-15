const mongoose = require('mongoose'),
    Schema = mongoose.Schema;


const AccountSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    balance: String,
    requested_value: String,
    state: String,
    date_to_pay: String,
    paid_out: Boolean,
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Account', AccountSchema);