console.log("hello world");

// 0 kata
// add

//console.log("0: add+++++++++++++++++");

function add(a,b) {
  //  let result = a + b;
  //  return result;
    return a + b;
}

console.log( add(2,4) );

// 1 kata
//multiply
function multiply(a, b) {
  let result = 0;
  let counter= 0;
  while (counter<b) {
      result=add (a,result)
      counter++
  }
  return result;
}
console.log(multiply(6,4));
function power(x,n) {
  let result = 1;
  let count =0;
  while (count<n){
      result = multiply (x,result)
      count ++
  }
  return result;
}
console.log(power(2,8));
console.log(power(3,4));

// 2 kata
// factorial

function factorial (x){
  let result = 1;
  let counter = 0;
  while (counter<x) {
      result = multiply(x-counter,result)
      counter ++
  }
  return result;
}
console.log(factorial(5));