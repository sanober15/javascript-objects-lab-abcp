var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  let x = {key : value};
  object = Object.assign(object, x);
  return object;
}
