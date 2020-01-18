
const expect = require('expect');
const password = require('../src/password.js');
const pin = require('../src/pin.js');

describe('Pin test', function(){
  it('It should return an array with 4 elements', function(){
    expect(pin.verifyPIN(4)).toHaveLength(4);
  });
});

describe('Password test', function(){
  it('It should return an array with 8 elements', function(){
    expect(password.verifyPW(8)).toHaveLength(8);
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

describe('Password Fail test', function(){
  it('Should fail when passed a string instead of a number', function(){
    expect(password.verifyPW('string')).toBeFalsy();
  });
  it('Should fail when passed a boolean instead of a number', function(){
    expect(password.verifyPW(true)).toBeFalsy();
  });
  it('Should fail when passed null instead of a number', function(){
    expect(password.verifyPW(null)).toBeFalsy();
  });
  it('Should fail when passed undefined instead of a number', function(){
    expect(password.verifyPW(undefined)).toBeFalsy();
  });
  it('Should fail when passed an empty field instead of a number', function(){
    expect(password.verifyPW()).toBeFalsy();
  });
});