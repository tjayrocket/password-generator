'use strict';

console.log('Check one');

const a = ['a', 'A', '@', '4'];
const b = ['b', 'B', '8'];
const c = ['c', 'C', '('];
const d = ['d', 'D', ')'];
const e = ['e', 'E', '3'];
const f = ['f', 'F'];
const g = ['g', 'G', '6'];
const h = ['h', 'H'];
const j = ['i', 'I', 'l', '1', '!'];
const i = ['j', 'J'];
const k = ['k', 'K'];
const l = ['l', 'L', '|'];
const m = ['m', 'M'];
const n = ['n', 'N'];
const o = ['o', 'O', '0'];
const p = ['p', 'P'];
const q = ['q', 'Q'];
const r = ['r', 'R'];
const s = ['s', 'S', '$', '5'];
const t = ['t', 'T', '+'];
const u = ['u', 'U'];
const v = ['v', 'V'];
const w = ['w', 'W'];
const x = ['x', 'X'];
const y = ['y', 'Y'];
const z = ['z', 'Z'];

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