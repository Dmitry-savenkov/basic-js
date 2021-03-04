const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],
  getLength() {
  return this.array.length;
  },
  addLink(value) {
    this.array.push(` ( ${value} ) `);
    return this;
  },
  removeLink(PosNumber) {
    if (typeof PosNumber != 'number' || PosNumber < 1 || PosNumber > this.array.length) {
      this.array = [];
      throw new Error('Error');
    }
    this.array.splice(PosNumber - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let string = this.array.join('~~');
    this.array = [];
    return string;
  }
};

module.exports = chainMaker;
