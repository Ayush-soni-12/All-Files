   // how to export file from one file to another file
   // module.exports --1.require() a built in function to include external modules that exit in separate files
   //2. module.exports -- a special object 

const sum =(a,b)=> a+b;
const nul=(a,b)=> a*b;
// module.exports=123;

// ................... file export krne ke tarike ......................
// ..............first ............................
// let obj ={
//     sum: sum,
//     mul: nul,
// };
// module.exports=obj;

// ...................... second ..................................

// module.exports  ={
//     sum: sum,
//     mul: nul,
// };

// import  .........
 
 export const add =(a,b)=> a+b;
 export const mul=(a,b)=> a*b;