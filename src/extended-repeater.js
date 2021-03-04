const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let temp = '';
  options.repeatTimes === undefined ? options.repeatTimes = 1 : options.repeatTimes;
  options.separator === undefined ? options.separator = '+' : options.separator;
  options.addition === undefined ? options.addition = '' : options.addition;
  options.additionRepeatTimes === undefined ? options.additionRepeatTimes = 1 : options.additionRepeatTimes;
  options.additionSeparator === undefined ? options.additionSeparator = '|' : options.additionSeparator;

  function getRepeatTimes(numb, sep) {
    let resChain = '';
    for (let i = 0; i < numb; i++) {  
      if(i === numb - 1) resChain += str + getAdditionRepeatTimes(options.addition, options.additionRepeatTimes, options.additionSeparator);

      else resChain += str + getAdditionRepeatTimes(options.addition, options.additionRepeatTimes, options.additionSeparator) + sep;
    }
    return resChain;
  }

  function getAdditionRepeatTimes(add, numb, step) {
    
    let result = '';
    
    for (let i = 0; i < numb; i++) {
      if(i === numb - 1){
        result += add;
      }
      else result += add + step;
    }
    return result;
  }
  
  return temp += getRepeatTimes(options.repeatTimes, options.separator);
  
};
  
