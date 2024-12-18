// object literals
let student ={
    1: "shradda",
    age: 23,
    marks: 63.5,
};
const item ={
    price: 100.5,
    discout: 50,
    colors: ["red", "green"]
};
const students ={
    karan:{
        grade:"a",
        class:8
    },
    ayush:{
        grade:"b",
        class:7
    },
    aman:{
        grade:"c",
        class:9
    }
};
students.karan.grade ="d";
students.karan.age =23;


//............................... maths function .....................
// Math.abs(n) - ye function absolute value deta hai  yani negative value ko positive me convert krdeta hai 
// Math.pow(a,b)-
// Math.floor(n)- ye function hme small  round off value deta hai 
// Math.ceil(n)- ye function hme large round off value krke deta hai
//Math.random() - ye function hme 0 to 1 koi bhi value deta hai but kabhi bhi 1 nhi deta hai 


// practice qs (how to make random integer from 1 to 10)
 let num = Math.random();
console.log(num);
num  = num *10;
console.log(num);
 num =Math.floor(num);
console.log(num+1);
// in single line code
let num1 =  Math.floor(Math.random()*10 +1) ;
console.log(num1);
// random number between 1 to 100
let num2 =  Math.floor(Math.random()*100 +1) ;
console.log(num2);
// random number between 1 to 5
// multiply by 5

// .......................... guessing game ...........................
let user =prompt("Enter maximum range  of an number");
 let number=Math.floor(Math.random()*user+1);
 console.log(number);
 let guessNum = prompt("Guess the Number");
 while(true){
    if (number==guessNum){
        console.log("congratulation You guess the right number");
        break;
    }else if (guessNum==="quit"){
        console.log("you quit the game");
        break;
    }else{
        guessNum = prompt("You guess wrong number . please try again");
    }
 }
