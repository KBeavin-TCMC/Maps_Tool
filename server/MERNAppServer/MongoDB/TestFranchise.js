const mongoose = require('mongoose');

const testFranchise = new mongoose.Schema({
    name: {
        type: String
    },
    status: {
        type: String
    },
    email: {
        type: String
    },
    franchise_id: {
        type: String
    }
});

module.exports = TestFranchise = mongoose.model('test-franchise', testFranchise, 'test-franchise');