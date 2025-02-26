const nameee = require('./other') 
console.log("amit Kumar");
function add(a,b)
{
return a+b;
}

var add2 = (a,b) => 
{
    return a+b
}

var addnum = add(2,5);
var addnum2 = add(2,255);
console.log("add", addnum)
console.log("add2", addnum2)
console.log('name', nameee.namee)
console.log('name', nameee.x)