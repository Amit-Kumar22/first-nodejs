const express = require('express');
const routes = express.Router();
const person = require('../Models/person');


routes.post('/', async (req, res) => 
    {
        try
        {
            const data = req.body; //Asuming the request body contain person data
            const newPeople = new person(data);
    
            //save the new people to database
            const response = await newPeople.save();
            res.status(200).json(response);
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
           const data =  await person.find();
           res.status(200).json(data);
        }catch(ex)
        {
            res.status(500).json(`error is ${ex.message}`)
        }
    })

    module.exports = routes;