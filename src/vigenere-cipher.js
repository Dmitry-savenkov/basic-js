const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor(type) {
    
    this.type = arguments.length ? type : true;
    
    this.charCount = 26;
    
  }
  
  crypt(less, key, operation) {
    
    let WordTemp = "";
    let Poskey = 0;
    
    for (let i = 0; i < less.length; i++) {
      
      let m = less.toUpperCase().charCodeAt(i) - 65;
      if (m < 0 || m > this.charCount) {
        WordTemp += less[i];
        
        if (m != -33) Poskey += 1;
        
        continue;
      }
      let k = key.toUpperCase().charCodeAt(Poskey++ % key.length) - 65;
      
      WordTemp += String.fromCharCode((operation(m, k) % this.charCount) + 65);
    }
    if (!this.type) WordTemp = WordTemp.split("").reverse().join("");
    return WordTemp;
  }
  
  encrypt(less, key) {
    return this.crypt(less, key, (m, k) => m + k);
  }
  
  decrypt(less, key) {
    return this.crypt(less, key, (m, k) => m + this.charCount - k);
  }
}

module.exports = VigenereCipheringMachine;
