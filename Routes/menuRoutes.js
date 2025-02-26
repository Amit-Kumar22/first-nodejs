const express = require('express');
const routes = express.Router();
const MenuItem = require('../Models/MenuItem');


routes.post('/', async (req, res) => 
    {
        try
        {
            const menudata = req.body;
            const allmenudata = new MenuItem(menudata)
    
            const response = await allmenudata.save();
            res.status(200).json(response)
        }
        catch(ex)
        {
            res.status(500).json(`error is ${ex.message}`)
        }
    })
    
    routes.get('/', async(req, res) => 
    {
        try
        {
            const data =  await MenuItem.find();
            res.status(200).json(data);
        }catch(ex)
        {
            res.status(500).json(`error was ${ex.message}`)
        }
    })

    module.exports = routes;