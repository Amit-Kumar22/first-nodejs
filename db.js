const mongoose = require('mongoose');
require('dotenv').config()

//const mongoURL = 'mongodb://localhost:27017/developers';
const mongoURL = process.env.Db_URL

// set the mongodb connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})