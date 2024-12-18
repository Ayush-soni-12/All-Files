console.log("hello world");
//  ...................Template literals ...................

let pencilPrice =10;
let eraserPrice = 5;
console.log(`the total price is : ${pencilPrice+eraserPrice} rupees `);
let age= 16;
console.log(age<18);
// ........ practice qs.................
let size = "l";
if (size === "xl"){
    console.log(`price is Rs ${250}`);

}
else if(size==="l"){
    console.log(`price is Rs ${200}`);
}
else if (size === "M"){
    console.log(`Price is Rs ${100}`);
}else if(size === "S"){
    console.log(`Price is Rs ${50}`);
}
// ...................practice Qs...................

let str = "america";
if (str[0]==="a"&&str.length>3){
    console.log("it is good string");
}
else{
    console.log("it is not a good string");
}
// ......... truth and falsy ...................
// 0=false  1=true
// javascript me har chiz ke pass true ya phir false value  hoti hai 
// falsy value = false, 0 -0,0n ,"", null , undefined, NaN
// truthy value = everything else
 
if(true){
    console.log("it has true value");
}
else{
    console.log("it has false value ");
}

// .................... Alert & prompt..................
 alert("something is wrong");
 console.error("it is an error message");
//  input lene ke liye prompt ka use krte hai

 let firstName = prompt("enter your name ");
 console.log(firstName);

//  ...............practice question ................
 let msg ="help!";
 console.log(msg.toUpperCase());

//  Q2

let a = "ApnaCollege";
console.log(a.slice(4).replace("l","tR"));