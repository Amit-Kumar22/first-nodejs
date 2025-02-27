var fs = require('fs')
var os = require('os')
require('dotenv').config()
console.log(process.env)

const func = () => 
{
    return 'Kumar'
}

var namee = os.userInfo()
var x = namee.username

module.exports = {
    namee,
    x
}