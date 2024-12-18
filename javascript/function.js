function hello(){
    console.log("hello");
}
let a = hello();

// dice question
let b =dice();
 
 function dice(){
    let dice = Math.floor(Math.random()*6)+1;
    console.log(dice);
 }
 
 // .........................functions with argument 
 function printName(name,age){
    console.log(`${name} and age is ${age}`);
 }
 printName("Ayush",13);
 //..................... Return keyword......................
 // return keyword is used to return some value from the function 

 // ...............practice question ...................
 
 
//  function sum(){
//  let n = prompt("Enter Number");
//  let c = 0;

//  for (let i = 1; i<=n; i++){
//     c=c+i;

//  }
//  return c;
// }
 
// let s = sum();
// console.log(s);


//...................scope .......................
// scope determines the accessiblity of variables , objects, and functions from different parts of the code
// function scope -- variables defined inside a function are not accessible from outside the function 
// block scope -- variables declared inside a {} block cannot be accessed from outside the block
// lexical scope -- a variable defined outside a function can be accessible inside another function defined after the variable declaration 

// ....................function Express .....................
 const sum = function(a,b){
   return a+b;
 }
 sum(2,3);
 // ...................Higher Order function ....................
 function multipleGreet(func,Count){
   for(let i =1; i<=Count; i++){
      func();
   }
 }
 let greet = function(){
   console.log("hello");
 }
 
  multipleGreet(greet, 5);
  // .............method................
  //actions that can be performed on an object
  const calculator ={
   num:55,
   add: function(a,b){
      return a+b;
   },
   sub:function(a,b){
      return a-b;
   },
   mul: function(a,b){
      return a*b;
   }
  };

  // ..................... Practice question .......................
  let arr =[1,2,3,4,5,6,7,8,9,10];
  let num = 5;

  function getElement(arr,num){
   for(let i = 0;i<arr.length;i++){
      if(arr[i]>num){
         console.log(arr[i]);
      }
   }
  }
  getElement(arr,num);

  // .....................Practice question 2 ...................
  