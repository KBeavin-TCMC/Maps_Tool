const mongoose = require('mongoose');

const testAccount = new mongoose.Schema({
    accountName: { 
        type: String
    },
    status: {
        type: String
    },
    address_street: {
        type: String
    },
    address_city: {
        type: String
    },
    address_state: {
        type: String
    },
    address_zip: {
        type: String
    },
    franchise_id: {
        type: String
    },
    account_id: {
        type: String
    }
});

module.exports = TestAccount = mongoose.model('test-account', testAccount);