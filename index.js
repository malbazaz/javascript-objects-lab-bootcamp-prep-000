var recipes = {}
var obj
var object1
function updateObjectWithKeyAndValue(obj, key, value){
object1 = Object.assign({},obj,{[key]:value})
return object1
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj= Object.assign({}, obj, {[key]:value})
  return obj
}
function deleteFromObjectByKey(obj, key){
  var object2
  object2= delete.obj[key]
  return object2
}