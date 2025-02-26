const express = require('express')
const app = express();
const db = require('./db');

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

app.listen(3000);