'use strict';

const password = require('./src/password.js');
const pin = require('./src/pin.js');

console.log(password.verifyPW(8));
console.log(pin.verifyPIN(4));