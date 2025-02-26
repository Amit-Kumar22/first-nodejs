const mongoose = require('mongoose');

const allItem = new mongoose.Schema(
    {
        item: {
            type: String,
            required: true,
            default: ''
        },
        ingridient: {
            type: [String],
            required: true,
            default: []
        },
        is_drink: {
            type: Boolean,
            default: false
        }
    }
)

const itemData = mongoose.model('allmenu', allItem)
module.exports = itemData;