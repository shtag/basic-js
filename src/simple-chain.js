const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if(arguments.length == 0) this.chain.push(`()`)
    else this.chain.push('( ' + value + ' )')
    return this
  },
  removeLink(position) {
    if(position > this.chain.length || typeof position != 'number' || Math.floor(position) != position){
      throw 'You can\'t remove incorrect link!'
    } else {
      position--;
      this.chain.splice(position, 1)}
      return this
  },
  reverseChain() {
    if(this.chain.length === 0) return this
    this.chain.reverse()
    return this
  },
  finishChain() {

    
    return this.chain.join('~~')
    
  }
};

module.exports = {
  chainMaker
};
