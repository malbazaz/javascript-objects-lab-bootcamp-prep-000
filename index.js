var recipes = {}
var object1
function updateObjectWithKeyAndValue(object1, key, value){
object1 = Object.assign({},object1,{[key]:value})
return object1
}