'use strict';

const logic = require('./src/logic.js');

console.log(logic.verifyPW(8));
console.log(logic.verifyPIN(4));
console.log(logic.inputStr('Balls'));
console.log(logic.inputStr(12));
console.log(logic.inputStr(true));
console.log(logic.inputStr({ fight: 'right' }));