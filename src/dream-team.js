const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  if(!Array.isArray(members)) {
    return false
  }
  var arr = [];
  var tempStr = '';
  for (let i = 0; i < array.length; i++) {
    if (typeof name === 'string')
      tempStr = array[i].trim();
      arr.push(tempStr[0].toUpperCase())
    }
    return String(arr.sort().join(''))
};
