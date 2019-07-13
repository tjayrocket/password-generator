'use strict';

console.log('Check one');

const a = ['a', 'A', '@', '4', 'alpha'];
const b = ['b', 'B', '8', 'bravo'];
const c = ['c', 'C', '(', 'charlie'];
const d = ['d', 'D', '|)', 'delta'];
const e = ['e', 'E', '3', 'echo'];
const f = ['f', 'F', '|=', 'foxtrot'];
const g = ['g', 'G', '6', 'golf'];
const h = ['h', 'H', '|-|', 'hotel']; 
const i = ['i', 'I', 'l', '1', '!', 'india'];
const j = ['j', 'J', 'juliet'];
const k = ['k', 'K', '|<', 'kilo'];
const l = ['l', 'L', '|', 'lima'];
const m = ['m', 'M', '|\\/|', 'mike'];
const n = ['n', 'N', '|\\|', 'november'];
const o = ['o', 'O', '0', '()', 'oscar'];
const p = ['p', 'P', '|*', 'papa'];
const q = ['q', 'Q', '9', 'quebec'];
const r = ['r', 'R', 'romeo'];
const s = ['s', 'S', '$', '5', 'sierra'];
const t = ['t', 'T', '+', '7', 'tango']; 
const u = ['u', 'U', '|_|', 'uniform'];
const v = ['v', 'V', '\\/', 'victor'];
const w = ['w', 'W', '\\^/', 'whiskey'];
const x = ['x', 'X', '><', 'xray'];
const y = ['y', 'Y', 'yankee'];
const z = ['z', 'Z', '2', '7', 'zulu'];

// Use a filter to find the letter in the remix function.

// For easy mode, make sure you only use option 1 or 2 to keep the letters only and ignore the more obscure options. Use them for Hard Mode.

const alphabet = [ a, b , c, d, e, f, g, h, i , j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z ];

const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const spChars = ['!', '@', '#', '$', '%', '&', '(', ')', '*', '+', '-', '/', '\\', '\'', ',', '.', ':', ';', '<', '=', '>', '?', '[', ']', '^', '_', '{', '|', '}', '~', '`' ];

function remix(string){

  let breakaway = string.split('');

  console.log(breakaway);

  for(let i = 0; i < breakaway.length; i++){

    // console.log(breakaway[i]);

    let newChar = Math.round((Math.random() * 2) + 1);

    if(breakaway[i] == 'a' && newChar == 0){
      console.log(a[newChar] + ' ' + newChar);
    } else if(breakaway[i] == 'a' && newChar == 1) {
      console.log(a[newChar] + ' ' + newChar);
    } else if(breakaway[i] == 'a' && newChar == 2) {
      console.log(a[newChar] + ' ' + newChar);
    } else if(breakaway[i] == 'a' && newChar == 3) {
      console.log(a[newChar - 1] + ' ' + newChar);
    } else {
      console.log(breakaway[i])
    }

  }

}

function scrambleLetters(str){

  let breakaway = str.split('');
  console.log(breakaway);

  for(let i = 0; i < breakaway.length; i++){

  }

}