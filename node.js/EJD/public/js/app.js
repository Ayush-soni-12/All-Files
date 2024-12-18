const btns = document.querySelectorAll("button");
for(let btn of btns){
    btn.addEventListener( "click" ,()=>{
btn.style.backgroundColor ="red";
btn.style.color ="white";
    })
}