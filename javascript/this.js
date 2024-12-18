// this keyword ka use krte hai jab hume object ki key value ka use object ke hi andar kisi method me krna hota hai 
const student ={
    name: "shradha",
    age: 23,
    eng:95,
    math:93,
    phy:97,
    getAvg(){
        let avg =(this.eng+ this.math + this.phy)/3;
        console.log(`${this.name} got avg marks is ${avg}`);
    }
}

// ..................... try or catch .....................
 // try -- error throw krta hai 
 // catch -- error catch krta hai 
 console.log("hello");
 console.log("hello");
 console.log("hello");
 try{
    console.log(a);
 }catch(err){
    console.log("error");
    console.log(err);
 }
 
 console.log("hello");
 console.log("hello");
 console.log("hello");

 // ..................... Arrow Function ...............
   const sum =(a,b)=>{
  console.log(a+b);
   }
   sum(2,3);
   // .............implict return...................
   //........................ setTimeout function and setInterval funciton ........................
   //setTimeout(function,time)
   console.log("hi");
 

   setTimeout( ()=>{
    console.log("ayush");
   } ,4000);


   console.log("welcome");
   //setInterval(function , timeout)
   // set interval ko jab hum ek time dedte hai to bo apne ap call hota rhata hai us time ke baad
   // set interval ko rokne ke liye hum clearInterval ka use krte hai  


//   let id =   setInterval( ()=>{
//     console.log("ayush");
//    } ,2000);

//    clearInterval(id);

// ................... this with Arrow Functions .......................
