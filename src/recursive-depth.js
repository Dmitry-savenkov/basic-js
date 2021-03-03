const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        if (arr[i].length == 0){
          arr[i][0] = 1
        arr2 = arr2.concat(arr[i])
        }
      }
    }
    if (arr2.length != 0){
      return 1 + this.calculateDepth(arr2)
    }
    else{
      return 1
  }}
};
