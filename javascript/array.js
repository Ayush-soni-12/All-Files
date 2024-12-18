// in javascript we store different value in aray
let info =["ayush",20,60];
console.log(info[0]);
console.log(info[0][0]);
console.log(info[0].length);

// arrays are mutuable

let fruits =["mango" , "banana","Apple"];
console.log(fruits.length)
fruits[0] = "grapes";
console.log(fruits);

// array methods

// push method -end me add krdega

let cars=["BMW", "audi", "XUV", "maruti "];
console.log(cars);
console.log(cars.push("toyota"));
console.log(cars);

// pop method- end se delete krdega 

console.log(cars.pop());
console.log(cars);

// unshift method - start se add hoga 

console.log(cars.unshift("ferrari"));
console.log(cars);

// shift method - start se delete hoga

console.log(cars.shift());
console.log(cars);

// practice qs 

let month = [ 'january', 'july','march','august'];


while(month.length>0){
    console.log(month.shift());
}
console.log(month);
console.log(month.unshift("july"));
console.log(month.unshift("june"));
console.log(month);


//  indexOf -return index of something

let primary =["red", "blue", "green"];
console.log(primary.indexOf("yellow"));

// include - search for a value 

console.log(primary.includes("blue"));
console.log(primary.includes("purple"));

// concat method - for merge two arary

let col1 =["red", "blue", "green"];
let col2 =["yellow" , "purple"];
console.log(col1.concat(col2));
console.log(col2.concat(col1));

// reverse method -reverse an array
console.log(col1.reverse());

// slice method - copies a portion of an array when we use an slice method there is no change in original array
 let colours = ['red', 'yellow','blue', 'green','purple'];
 console.log(colours.slice());
 console.log(colours.slice(2));
 console.log(colours.slice(2,4));
 console.log(colours.slice(-2));

//  splice method - remove /replace/add elements in place when we use an splice method there is  change in original array
// splice(start,deleteCount ,item 0...item n)

let colours1 = ['red', 'yellow','blue', 'green','purple'];
console.log(colours1.splice(4));
console.log(colours1);
console.log(colours1.splice(0,1));
console.log(colours1);
console.log(colours1.splice(0,1,"black","grey"));
console.log(colours1);

// sorts in array 

let days =['monday','sunday','wednesday','tuesday'];
console.log(days.sort());

// pratice qs

let month1 = [ 'january', 'july','march','august'];
console.log(month1.splice(0, 2, "july","june" ));
console.log(month1);

// Array reference






