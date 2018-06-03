var recipes = {}
var obj
var object1
function updateObjectWithKeyAndValue(obj, key, value){
object1 = Object.assign({},obj,{[key]:value})
return object1
}