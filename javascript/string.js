//  trim method  - is method se hum space ko deny kr skte hai 
let mes = "  hello  ";
console.log(mes.trim());
//  string asre immutable in javascript 

// toUpperCase or toLowerCase method

let Name = "Ayush soni";
console.log(Name.toUpperCase());

let name = "AYUSH SONI";
console.log(name.toLowerCase());

// indexOf - returns the first index of occurence of some value in string Or givess -1 if not found
 let msg = "ilovecoding";
 console.log(msg.indexOf(""));

//  method chaining- ek sath two or more method ka use krna 

let a = "    Ayush soni";
console.log(a.trim().toUpperCase());

// slice method- Returns a part of the original string as a new string 
// b.slice(-num) = b.slice(length-num); 
let b ="Ayushsoni";
console.log(b.slice(0,5));
// Replace method - search a value in the string & returns a new string with the value replaced 

let c = "Ilovecoding";
console.log(c.replace("love","do"));
console.log(c.replace("o","c"))
// repeat - returns a string with the number of copies of a string
let d= "ayush";
console.log(d.repeat(5));


