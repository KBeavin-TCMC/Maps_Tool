require('dotenv').config();

const express = require('express');
const app = express();
const user = require('./controllers/userController');
const content = require('./controllers/contentController');
const sequelize = require('./db');
const connectDB = require('./MongoDB/MongoConnection');
const bodyParser = require('body-parser');

connectDB();
sequelize.sync();
app.use(bodyParser.json());
app.use(require('./middleware/headers'));
app.use('/api/user', user);
app.use('/api/userModel', require('./Api/User'));
app.use('/api/testAccount', require('./Api/TestAccount'));
app.use('/api/testFranchise', require('./Api/TestFranchise'));
app.use(require('./middleware/validate-session'));
app.use('/api/content', content);

// app.listen(process.env.PORT, "192.168.1.132", () => {
//     console.log(`App is listening on ${process.env.PORT}`);
// });


app.listen(process.env.PORT, () => {
    console.log(`App is listening on ${process.env.PORT}`);
});