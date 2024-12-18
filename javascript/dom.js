// getElemetById -- returns the element as an object or null(if not found)
// getElementByClassName -- returns the elements as an html collection or empty collection (if not found)
// getElementBytagname -- 
// ..................QuerySelectors..........................
//allows us to use any css selector
//document.querySelector()
//  console.dir(document.querySelector("h1"));// selects first h element 


// console.log(document.querySelector("#name")); // selects first element with id 

// console.dir(document.querySelector(".age")); // selects first element with class

// document.querySelectorAll() -- select all elements 

// ................. Setting Content in Objects ......................
// innerText -- show the visible text
//innerHTML-- shows the full markup
//textContent -- shows all the full text
//  let para = document.querySelector(" p");
//  console.log(para);
//  para.innerText = "abc";
//  console.log(para.innerText);
// // .................Manipulating Attributes ..................
// let img = document.querySelector('img');
// console.log(img);
//  console.log(img.getAttribute('id'));
// console.log(img.setAttribute('id' ,'spiderman'));
// // ...............Manipulaing style ....................

// console.log(para.style);
// para.style.color ="blue"

// //..................... using class list ........................
// let heading = document.querySelector("h1");
//  console.log(heading.classList);
//  //classList.add()-- to add new classes
//  //classList.remove()-- to remove classes
//  //classList.contains() -- to check if class exits
//  // classList.toggler() -- to toggle between add & remove
// heading.classList.add("green")
// // heading.classList.remove("green");

// // ........................ Navigation ....................

// //parentElement -- parent element nikal skte hai 
// //children -- childen element nikal skte hai 
// // childElementCount -- child count kr skte hai 
// // previousElementSibling -- previous sibling dek skte hai 
// // nextElementSibling -- next sibling dek skte hai

// // ......................Adding Elements ..................

// // javascript ki madad se hum elements bhi add kr skte hai 
// let newP = document.createElement('button');
// newP.innerText ='hi I am Ayush soni';
// let body = document.querySelector('body');
// body.appendChild(newP);// append ki help se hum kisi bhi element ko access krke usme  sabse end me new element add kr skte  hai 
// newP.append('this is text') // iski help se hum jo element create kr rhe hai usme change kr skte hsai 
// body.prepend(newP);// prepend ki help se hum kisi bhi element ko access krke usme  sabse uppar me new element add kr skte  hai 
// // insertadjacentelement -- read from mdn

// // ............. removing elements ....................
// // RemoveChild --  elements kko remove krne ke liye hota hai
// //remove -- elements kko remove krne ke liye hota hai 
// let div = document.querySelector('.age');
// div.remove('p')

// //  ..............................dom events ..........................
// // events are signals that something has occured 
// // onclicks,
 let btn = document.querySelector("button");
// btn.onclick =function(){
//     console.log("button was clicked");
// }
// //onmouse --
// btn.onmouseenter =function(){
//     console.log("Ayush soni");
// };

// .................. event listner ..................

// addEventslistner

// btn.addEventListener("click",function(){
//     console.log("hello")
// })
// btn.addEventListener("click" , function(){
//     console.log("ayushsoni")
// });

//////////////////////////////////////////////Activit //////////////////////////////////////////

// btn.addEventListener("click",function(){
//     console.log("generate random color");
//     let h3 = document.querySelector("h3");
//     let randomColor =getRandomcolor();
//     h3.innerText = randomColor;
//     let div = document.querySelector("#random");
//     div.style.backgroundColor =randomColor;
// });
// function getRandomcolor(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     let color =`(${red} ${green} ${blue})`;
//     return color;
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////


// .................this in event Listeners ..............
// when this is used in a call back of event handler of something it refers to that something\
//this ka use jab event listener ke sath hota hai to bo jis bhi elment ke sath use hota hai bo usi element ko represent krta hai 

// btn.addEventListener("click",function(){
//     console.log(this.innerText);
//     this.style.backgroundColor ="blue"
// });

////////////////////////////////KeyBoard Events/////////////////////////////////////

// btn.addEventListener("click",function (event){
//     console.log(event);
//     console.log("button clicked")
// })
// key down -- how many times we pressed key
// //key up -- how many times we realesed key
// let inp =document.querySelector("input");
// inp.addEventListener("keydown", function(){
//     console.log("key was pressed")
// }) 

// let inp =document.querySelector("input");
// inp.addEventListener("keyup", function(event){
//     console.log(event)
//     console.log("key was released")
// }) 


/////////////////////////////////// practice ////////////////////////////////////

// let inp =document.querySelector("input");
// inp.addEventListener("keydown",function(event){
   
//     console.log(event.code);
//     if(event.code == "ArrowUp"){
//         console.log("character moves forward");
//     }
    
//    else if(event.code == "ArrowDown"){
//         console.log("character moves downward");
//     }
    
//    else if(event.code == "ArrowLeft"){
//         console.log("character moves leftward");
//     }
    
//      else if(event.code == "ArrowRight"){
//         console.log("character moves rightward");
//     }
//     else{
//         console.log("wromg key press");

//     }
// });

/////////////////////////////////////////////form events /////////////////////////////

//agr hum action url pr nhi jana chate hai aur form submit hone ke bad isi page pr rhena chate hai to hum (event.preventDefault())ka use kr skte hai 

// let form =document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     alert("submitted");
// })

/////////////////////////  extracting form data /////////////////////////////////

//input ki value inikalne ke liye hum (value) ka use krte hai 
//form ke andar bahut sare elements ho to hum queryselector ka use na krke (form.elements )ka use kr skte hai use form ke andar jo bhi elements hoge bo access ho jayge


// let form =document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
  
//    let inp =form.elements[0];
//    let btn = form.elements[1];
//    console.log(inp.value);
//    console.log(btn.innerText);
// })

//////////////////////more events///////////////////////////////

//change event-- the change event occurs when the value of an element has been changed(only works on <input> <textarea> <select> elements)

let form =document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
})
let inp =document.querySelector("input");
inp.addEventListener("change",function(){
    console.log("input changed");
    console.log("final value =",this.value)
})


// ........................ event bubbling ....................................

// jab bhi hum nested elements pr event listner lagate hai tab agr hum sabse andar bale element pr event listner call krte hai to bo bahar bale element ke event listner ko bhi call krta hai isko rokne ke liye hum 
// event.stopPropagation () ka use krte hai 
