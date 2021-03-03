const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnSpeed) {
  
  let numberofTurns = Math.pow( 2, disksNumber ) - 1 ; 
  let second = Math.floor(( numberofTurns / turnSpeed ) * 3600) ; 
  
  return {turns: numberofTurns,
          seconds: second };
};
