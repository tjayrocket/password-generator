'use strict';

const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let pinContainer = [];

let pinPoint = function(){
  return Math.round(Math.random()*9);
};

let verifyPIN = function(num){
  if(typeof num !== 'number'){
    return false;
  } else {
    pinContainer = [];
    for(let i = 0; i < num; i++){
      pinContainer.push(nums[pinPoint()]);
    }
    return pinContainer;
  }
};

module.exports = { verifyPIN };