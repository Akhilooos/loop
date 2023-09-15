console.log('Hello welcome to JS');
//Varible Declerations
// let a;
// var x;
// w=10;
// const b=5;
// console.log(w);

 var b=5;
 console.log(b);
 {
    b=10;
    console.log(b);
 }
 console.log(b);

//  let decleration
// let is a blockscoped varible
// let decleration value is confined to that block
let c = 10;
console.log(c);
{
let c=15;
console.log(c);
}
console.log(c);
c=22;
console.log(c);
//const decleration 
const x=15;
// const x=20; cannot redeclare 
console.log(x);
{
    const x=20;
    console.log(x);
}
// x=22; we cannotdeclare const anywhere
//Datatypes
console.log(typeof(x));
// string
var firstname='Akhil Mathew';
console.log(typeof(firstname));
var t='100';
console.log(typeof(t));
// boolean
var stat=true;
console.log(typeof(stat));
// undefined
var d;
console.log(typeof(d));
// null

// Arrays
let array=['small','medium','large',10];
console.log(typeof(array));