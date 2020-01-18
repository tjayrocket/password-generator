
const expect = require('expect');
let logic = require('../src/logic.js');

describe('Pin test', function(){
  it('It should return an element with 4 elements', function(){
    expect([1,2,3,4]).toHaveLength(4);
  });
});