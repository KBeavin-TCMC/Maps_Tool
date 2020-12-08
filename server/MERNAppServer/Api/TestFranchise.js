const express = require('express');
const mongoose = require('mongoose');
const TestFranchise = require('../MongoDB/TestFranchise');
const route = express.Router();

route.post('/', async (req, res) => {
    const {_id, name, status, email, franchise_id } = req.body;
    let testFranchise = {};

    testFranchise.name = name;
    testFranchise.status = status;
    testFranchise.email = email;
    testFranchise.franchise_id = franchise_id;

    let testFranchiseModel = new TestFranchise(testFranchise);
    
    await testFranchiseModel.save();
});

route.get('/', async (req, res) => {
    let testFranchiseList = await TestFranchise.find();
    
    res.json(testFranchiseList);
    console.log("yay");
});

module.exports = route;