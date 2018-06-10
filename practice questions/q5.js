var str = "Please locate where 'locate' occurs!";

var found = str.indexOf("locate")

var fil = str.lastIndexOf("locate")

var sum = str.slice(found, found + 6)
console.log(sum)