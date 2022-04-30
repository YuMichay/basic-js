const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.length;
  },
  addLink(value) {
    if (value === '') {
      value = '( )';
    }
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof(position) === 'number' && Number.isInteger(position) && position > 0 && position <= this.arr.length) {
      this.arr.splice(position - 1, 1);
      return this;
    } else {
      this.arr = [];
      throw new Error("You can\'t remove incorrect link!");
    }
  },
  reverseChain() {
    this.arr = this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = this.arr.join('~~');
    this.arr = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
