'use strict';

const a = ['a', 'A'];
const b = ['b', 'B'];
const c = ['c', 'C'];
const d = ['d', 'D'];
const e = ['e', 'E'];
const f = ['f', 'F'];
const g = ['g', 'G'];
const h = ['h', 'H']; 
const i = ['i', 'I'];
const j = ['j', 'J'];
const k = ['k', 'K'];
const l = ['l', 'L'];
const m = ['m', 'M'];
const n = ['n', 'N'];
const o = ['o', 'O'];
const p = ['p', 'P'];
const q = ['q', 'Q'];
const r = ['r', 'R'];
const s = ['s', 'S'];
const t = ['t', 'T']; 
const u = ['u', 'U'];
const v = ['v', 'V'];
const w = ['w', 'W'];
const x = ['x', 'X'];
const y = ['y', 'Y'];
const z = ['z', 'Z'];

// Use a filter to find the letter in the remix function.

// For easy mode, make sure you only use option 1 or 2 to keep the letters only and ignore the more obscure options. Use them for Hard Mode.

const alphabet = [ a, b , c, d, e, f, g, h, i , j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z ];

const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const spChars = ['!', '@', '#', '$', '%', '&', '(', ')', '*', '+', '-', '/', '\\', '\'', ',', '.', ':', ';', '<', '=', '>', '?', '[', ']', '^', '_', '{', '|', '}', '~', '`' ];

let passwordContainer = [];
let passwordReturn = [];

let passPoint = function(){
  return Math.round(Math.random()*25);
};

//User inputs a string - verify it is a string.

//User puts in a numeric value
let verifyPW = function(num){
  if(typeof num !== 'number'){
    return false;
  } else{
    passwordContainer = [];
    for(let i = 0; i < num; i++){
      passwordContainer.push(alphabet[passPoint()]);
    }
    for(let j = 0; j < passwordContainer.length; j++){
      passwordReturn.push(passwordContainer[j][Math.round(Math.random())]);
    }
    return passwordReturn;
  }
};

let remixPW = function(str){
  console.log(str);
}

module.exports = { verifyPW, remixPW };