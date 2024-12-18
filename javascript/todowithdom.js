let btn=document.querySelector("button");
let ul =document.querySelector("ul");
let inp =document.querySelector("input");
btn.addEventListener("click" , ()=>{
let item=document.createElement("li");
let delbtn =document.createElement("button");
item.innerText=inp.value;
delbtn.innerText ="delete";
delbtn.classList.add("delete");
item.appendChild(delbtn);
ul.appendChild(item);
inp.value="";
})