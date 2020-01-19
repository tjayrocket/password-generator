
const expect = require('expect');
const password = require('../src/password.js');

describe('Password test', function(){
  it('It should return an array with 8 elements', function(){
    expect(password.verifyPW(8)).toHaveLength(8);
  });
});

describe('Password Verification Fail test', function(){
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