var fs = require('fs')
var os = require('os')

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