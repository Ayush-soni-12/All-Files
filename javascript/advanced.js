////////////////////////call stack //////////////////////////////////
// function hello(){
//     console.log("hello");
// }

// function demo(){
//     hello();
//     console.log("demo");
// }
// demo();

///////////////////////////// break points ///////////////////////////////////

// debugger ka  use krne ke liye use  breakpoints ke bare me padte hai

// ......................................js is single threaded..................................
// ..................call back hell ......................
// let h1 = document.querySelector("h1");
// function changeColor(color ,delay,nextColorChange){
//   setTimeout(()=>{
//     h1.style.color =color;
//     if(nextColorChange) nextColorChange();
//   },delay)
// }

// changeColor("red" ,1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000);
//     })
// })

// .......................promises................................
// function savetoDb(data,success, failure){
//     let internetspeed =Math.floor(Math.random()*10+1);
//     if(internetspeed >4)
//         success();
//     else
//     failure();

// };
// savetoDb("ayush soni",()=>{
// console.log("data was saved");
// savetoDb("bca hons",()=>{
//     console.log("data2 was saved")
// },()=>{
//     console.log("weak connection")
// })
// },()=>{
//     console.log("weak connection");

// })
// promises -- the promise object represent the eventual completion (or failure ) of an asynchronous operation and its resultling value 

// function savetoDb(data){
//     return new Promise((resolve,reject )=>{
//         let internetspeed =Math.floor(Math.random()*10+1);
//     if(internetspeed >4)
//         resolve("data was saved");
//     else
//     reject("data was not saved");
//     })
// };
//   let request = savetoDb("ayush soni");
//   request.then((result)=>{
//     console.log(" data 1 was saved ");
//     console.log(" result of promise ",result)
//    savetoDb("apna college").then((result)=>{
//     console.log("data 2 was saved")
//     console.log(" result of promise ",result)
//    })  
//    .catch((error)=>{
//     console.log("data2 was not saved")
//     console.log(" result of promise ",error)
//    })
// })
//   .catch((error)=>{
//     console.log(" data 1 was not saved");
//    console.log(" result of promise ",error)
// })
  // promises are rejected and resolved with some data (valid results or errors)
 

  // refactor this code with the help of promises

//   let h1 = document.querySelector("h1");
//   function changeColor(color ,delay){
//     return new Promise(( resolve , reject)=>{
//         setTimeout(()=>{
//             h1.style.color =color;
//             resolve("color change");
            
      
//           },delay)
//     })
   
//   }
  
//  changeColor("red",1000).then((request)=>{
//     console.log(request)
//     console.log("color change red")
    
//     changeColor("green",1000).then((request)=>{
//         console.log(request)
//         console.log("color change green ");

//     })
//     .catch(()=>{
//         console.log("color not change green")
//     })
//  })
//  .catch(()=>{
//     console.log("color not changed red");
//  })

// .......................... async function .................................
// all async fucntion return promises


// async function greet() {
//   console.log("Ayush soni")
  
  
// }
// greet().then(()=>{

//   console.log("promise was resolved")
// })
// .catch((err)=>{
//   console.log("promise was rejected ",err);
// })

// .................... await keyword .............................
// // pauses the execution of its surrounding async function until the promise is settled(resolved or rejected)
// function getNum(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       let num = Math.floor(Math.random()*10)+1;
//       console.log(num);
//       resolve();
      
//     },1000);
//   });
// }
// async function demo() {
//   await getNum();
//   await getNum();
//   await getNum();
//   await getNum();
// }

// let h1 = document.querySelector("h1");
//   function changeColor(color ,delay){
//     return new Promise(( resolve , reject)=>{
//         setTimeout(()=>{
//            let num = Math.floor(Math.random()*5)+1;
//            if(num>3){
//             reject("promise rejected");
//            }
//             h1.style.color =color;
//             resolve("color change");
            
      
//           },delay)
//     })
   
//   }
  
//   async function  change (){
//     // for handling rejection use try and catch
//     try{
//       await changeColor("red",1000);
//       await changeColor("green",1000);
//       await changeColor("blue",1000);
  
//     } catch(err){
//       console.log("error caught")
//       console.log(err);

//     }
//     let a =5;
//     console.log(a);
//   }

  // .................................... API( Application Programming Interface) ...............................


  // ....................JSON (javascript object Notation)..........................................
  
  // access data from JSON= parse method is used 
  // let a ='{"fact":"The earliest ancestor of the modern cat lived about 30 million years ago. Scientists called it the\u00a0Proailurus, which means \u201cfirst cat\u201d in Greek. The group of animals that pet cats belong to emerged around 12 million years ago.","length":226}';
  // console.log(a);
  // let validRes=JSON.parse(a);
  // console.log(validRes.fact);
  
  // //JSON.stringify(json)method-- to parse a js object data into json 
  // let student ={
  //   name:"Ayush soni",
  //   course: "bca"
  // };
  // let b = JSON.stringify(student);
  // console.log(b)

  // .............................. testing API tools ..............................

  // two tools are - postman,hoppscoth

  // .............................. Ajax .........................................


  //...................http verb ..................................
  // get,post,put ,delete

  // ..............................status codes ..............................
  // examples-200-ok,404-not found,400-bad server,500 internal server error

  // ................................. Add information in urls ........................
  //

  // http header

  // ........................... our first api request ........................................
//  for fetching the api we use fetch method
  // let url = "https://catfact.ninja/fact";
  // fetch(url)
  // .then((response)=>{
  //   console.log(response);
  //   response.json().then((data)=>{
  //     console.log(data);
  //     console.log(data.fact)
  //     fetch(url).then((response)=>{
  //       console.log(response);
  //       response.json().then((data)=>{
  //         console.log(data);
  //         console.log(data.fact)
  //       })
  //     })
  //   })
  // })
  // .catch((err)=>{
  //   console.log("error ",err);
  // })

  // ......................................... using fetch method with async ................................

  // let url = "https://catfact.ninja/fact";
  //  async function getFact() {
  //   try{
  //   let res = await fetch(url);
  //   let data = await res.json();
  //   console.log(res);
  //   console.log(data);
  //   console.log(data.fact);
  //   } catch(e){
  //     console.log("error is ",e);
  //   }
    
  //  }

   // ................... Axios ...........................
   //library to make http server
 
  
 //////////// how to use api with html //////////////////////////////////

 //....................... cat information api .................................//

// let btn = document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//   let fact = await getFact();
//   // console.log(fact);
//   let p =document.querySelector("#result");
//   p.innerText=fact;
// })


//    let url ="https://catfact.ninja/fact";
//    async function getFact() {
//     try{
//     let res = await axios.get(url);
//     return res.data.fact;
//     // console.log(res);
//     // console.log(res.data);
//     // console.log(res.data.fact);
//     }
//     catch(err){
//       console.log(err);
//       return "Not found";
//     }
    
//    }


// .................................. dog pictur api ..................................

// let btn = document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//   let link = await getImage();
//   // console.log(link);
//   let img =document.querySelector("#result");
//   img.setAttribute("src",link)
 
// })


//    let url ="https://dog.ceo/api/breeds/image/random";
//    async function getImage() {
//     try{
//     let res = await axios.get(url);
  
   
//     // console.log(res);
//     // console.log(res.data);
//     // console.log(res.data.message);
//     return res.data.message;
//     }
//     catch(err){
//       console.log(err);
//       return "Not found";
//     }
    
//    }


// ............................. sending headers with api request ..........................//


let url ="https://icanhazdadjoke.com/"

async function jokes() {
  const config ={headers:{Accept :"application/json,config"}}
  let res = await axios.get(url,config);
  console.log(res);
  console.log(res.data.joke)
  
}

// ....................... Activity using query string .........................