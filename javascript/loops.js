// print odd numbers

for (let i =1; i<=15; i=i+2){
    
    console.log(i);
}
// print even numbers
for (let i =2;i<=10; i =i+2){
    console.log(i);
}
// print table of 
let n =prompt("Enter your Number");
n= parseInt(n);
//parseInt is use for covert into integer


for(let i =n; i<=n*10;i=i+n){
    console.log(i);
}

//Nested loops

//while loop

let i =1;
while(i<=5){
    console.log(i);
    i++;
}
//practice qs

let favourite = "Iron man";
let a = prompt("Guess the movie");


while((a!=favourite) && (a!="quit")){
   console.log("wrong");
   a = prompt("Please try agian");
};
if(a===favourite){
    console.log("right");

}else{
    console.log("You Quit");
}
// break keyword
//nested loops with array
 
let heroes =[["Ironman","spiderman","hulk"],["superman","batman","thor"]];
for(let i =0; i<heroes.length; i++){
    console.log("list ",i);
    for(let j=0;j<heroes[i].length;j++){
        console.log(heroes[i][j])

    }
}
//for of loops - ka use krte hai jab hume sare elemts print krane hote hai 

let fruits =['mango','banana','apple','grapes'];
for(fruit of fruits){
    console.log(fruit);
}
let hero =[["Ironman","spiderman","hulk"],["superman","batman","thor"]];
for(list of hero){
    for(lists of list){
        console.log(lists);
    }
}



