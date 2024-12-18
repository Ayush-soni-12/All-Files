// process  ---  this object provides information about and control over  the current node.js process 
// process.argv --- returns as array containing the command -line arguments passed when the node.js process was launched

// let args =process.argv;
// for (let i =2;i<args.length;i++){
// console.log("hello to ",args[i]);
// };


// how to export file 
// const someValue =require("./math");
// console.log(someValue);

// const math = require("./math");
// console.log(math.sum(2,2));

// how to export directory from one to another
// there are two steps
// make index.js
// add all information in index.js

// const info =require("./fruit");
// console.log(info);

// require vs import 
 
// impport ..................
// for import export we download package.json file in current directory 
// hum chizo ko ya to import kr skte hai ya phir require dono ko ek sath  use nhi kr skte hai 


// import {add,mul} from "./math.js";
// console.log(add(1,5));


import { generate } from "random-words";
console.log(generate());