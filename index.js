var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  let x = {key : value};
  let n = Object.assign(object, x);
  return n;
}
