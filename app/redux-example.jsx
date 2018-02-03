var Redux = require('redux');

console.log('start Learning redux');

//pure function
function add(a,b){
  return a+b;
}
console.log(2,3);

var a=3;
function add(b){
  return a+b;
}

function changeProp(obj){
  return {
    ...obj,
    name:"sdfds"
  };
// obj.name='jimbra';
// return obj;

}
var startValue= {name:"SASFA",age:23};

var res = changeProp(startValue);
console.log(res);
console.log(startValue);
