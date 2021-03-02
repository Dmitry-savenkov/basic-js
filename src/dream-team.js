const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  if (!(array instanceof Array)) {
    return false
  }
  var arr = [];
  for (let name of array) {
    if (typeof name === 'string')
      arr.push(name[0].toUpperCase())
    }
    return String(arr.sort().join(''))
};
