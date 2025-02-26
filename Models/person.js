const mongoose = require('mongoose');

const newPerson = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        work: {
            type: String,
            enum: ["fronted", 'backend', 'data analysis']
        }
    }
)

const Person = mongoose.model('person', newPerson);
module.exports = Person;