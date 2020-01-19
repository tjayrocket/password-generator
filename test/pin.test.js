
const expect = require('expect');
const pin = require('../src/pin.js');

describe('Pin test', function(){
  it('It should return an array with 4 elements', function(){
    expect(pin.verifyPIN(4)).toHaveLength(4);
  });
});


describe('Pin Fail test', function(){
  it('Should fail when passed a string instead of a number', function(){
    expect(pin.verifyPIN('string')).toBeFalsy();
  });
  it('Should fail when passed a boolean instead of a number', function(){
    expect(pin.verifyPIN(true)).toBeFalsy();
  });
  it('Should fail when passed null instead of a number', function(){
    expect(pin.verifyPIN(null)).toBeFalsy();
  });
  it('Should fail when passed undefined instead of a number', function(){
    expect(pin.verifyPIN(undefined)).toBeFalsy();
  });
  it('Should fail when passed an empty field instead of a number', function(){
    expect(pin.verifyPIN()).toBeFalsy();
  });
});

