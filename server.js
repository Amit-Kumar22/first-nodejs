const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config()
//console.log(process.env)

const bodyParse = require('body-parser');
app.use(bodyParse.json());

app.get('/', (req, res) => 
{
    res.send('Hello Amit');
})

const presonRoute = require("./Routes/personRoutes")
app.use('/person', presonRoute);

const menuRoute = require("./Routes/menuRoutes")
app.use('/menuItem', menuRoute);


// commit for added
const port = process.env.PORT || 3000;

app.listen(port);