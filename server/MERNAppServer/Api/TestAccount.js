const express = require('express');
const { ObjectId } = require('mongoose');
const mongoose = require('mongoose');
const TestAccount = require('../MongoDB/TestAccount');
const route = express.Router();

route.post('/', async (req, res) => {
    try{
        const {accountName, status, address_street, address_city, address_state, address_zip, franchise_id, account_id } = req.body;
        let testAccount = {};
        
        testAccount.accountName = accountName;
        testAccount.status = status;
        testAccount.address_city = address_city;
        testAccount.address_state = address_state;
        testAccount.address_street = address_street;
        testAccount.address_zip = address_zip;
        testAccount.franchise_id = franchise_id;
        testAccount.account_id = account_id;
        
        let testAccountModel = new TestAccount(testAccount);
        
        await testAccountModel.save();
    }catch(error){
        console.log(error);
    }
});

route.get('/', async (req, res) => {
    let testAccountList = await TestAccount.find();
    
    res.json(testAccountList);
});

module.exports = route;
