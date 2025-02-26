const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/developers';

// set the mongodb connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})