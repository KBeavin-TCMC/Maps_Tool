const mongoose = require('mongoose');
const URL = process.env.MONGO_URL;
const connectDB = async () => {
    mongoose.connect(URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('mongoose connected..!');
}

module.exports = connectDB;