// forEach -  array ke  individual elements ke liye chalta hai 

let arr =[1,2,3,4,5];
let print = function(el){
    console.log(el);
};

arr.forEach(print);
let arr1 =[{
    name: "ayush",
    marks: 95
},{
    name: "ayushi",
    marks: 94
},{
    name: "aman",
    marks: 96
}]
arr1.forEach((el)=>{
    console.log(el);
    console.log(el.name);
    console.log(el.marks);
})
// Map -- iskie help se hum new array create kr skte hai 
let num =[1,2,3,4];
 let double = num.map((el)=>{
    console.log(el);
})
console.log(double);

// filter --
let nums =[2,4,6,1,5,8,8,9,12];
let ans = nums.filter((el)=>{
    return el%2==0;
});
console.log(ans);

// Every -- Returns true if every element of array gives true for some funcitons .else returns false
let num1 = [2,4,6,5];
 let ans1 = num1.every((el)=>{
    return el%2==0
});
console.log(ans1)

// reduce -- reduce the array to a single value 
let num2 =[1,2,3,4];
 let ans2 =num2.reduce((res,el)=>{
    return res+el;
});
console.log(ans2);

// find maximum number in array using reduce
let nums1 =[2,3,4,5,6,7,8,1,2,9];
let result = nums1.reduce((max,el)=>{
    if(max<el){
        return el;
    }
    else{
        return max;
    }
});
console.log(result)
// check if all numbers in our array are multiples of 10 or not
let arr2 =[10,20,30,50,60,90];
let result2=arr2.every((el)=>{
    return el%10==0;
})
console.log(result2)
// find the min number in an array 
let nums3 =[2,3,4,5,6,7,8,1,2,9];
let result3 = nums3.reduce((min,el)=>{
    if(min>el){
        return el;
    }
    else{
        return min;
    }
});
console.log(result3);

// default parameters --agr hum koi arguments pass nhi krte hai to jo defautl value humne di hai bo pass hojayegi
function sum(a,b =2){
    return a+b;
};
console.log(sum(1));

// spread -- expands an iterable into multiple values 

let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
console.log(Math.min(...a));
//spread with object
const data = {
    email: "sudhirsoni@gmai.com",
    password: 1234
};
const dataCopy ={...data , id :23};
let obj ={..."hello"};
console.log(obj);

// Rest -- Allows a function to take an indefinite number of arguments and bundle them in an array 
function sum(...args){
 return args.reduce((sum,el)=>{
     return sum+el;
 })
};
console.log(sum(1,2,3,4));
// destructuring -- storing values of array into multiple variables
 let names =["tony","bruce","peter","steve","avc","aergv","asdv","tfdd"];
 let [winner , runnerup , secondRunnerup, ...others] =names;// using rest concept in others
 console.log(winner);
 console.log(winner);
 console.log(secondRunnerup);
 console.log(others);

 //destructuring -- with objects
 const student = {
    name:"ayush",
    age:14,
    class:5,
    subjects:["hindi","english","maths"],

 };
 // agr hume bahut sara data diya hai aur hume koi specifice information nikalini hai to destructuring ka use kr skte hai
 let {name , age} =student;