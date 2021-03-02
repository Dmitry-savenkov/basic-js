const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  if (array === undefined){
    return array
  }
  let arr = [];
  for ( let i = 0; i < array.length; i++){
    if(typeof(array[i]) === String){
      arr.push(array[i].slice(0,1))
    }
    return arr.sort().join('').toUpperCase()
};
