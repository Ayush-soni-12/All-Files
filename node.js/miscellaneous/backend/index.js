const express = require("express");
const app =express();
//  let port =3000;
//  app.use(express.urlencoded({extended:true}))
//  app.use(express.json());
//  app.listen(port ,()=>{
//     console.log("listening on port");
// });


app.get("/register",(req,res)=>{
    let {user,password} =req.query;


    res.send(`standard get request welcome ${user}`);
})

app.post("/register",(req,res)=>{
    // console.log(req.body);
    let {user , password} =req.body;
    res.send(`standard post request${user}`);
})

// ........................ constructors in js .........................
// .........................new operator
function person(name , age){
    this.name= name;
    this.age =age;
}
person.prototype.talk= function(){
    console.log("hello world");
}
let p1 =new person("ayush ",20);
let p2 =new person("ayushi ",12);
console.log(p1);

//................................... classes ...............................
// classes are a template for creating objects 
// the constructors method is a special method of a class for  creating and initializing an object instances of that class 

class students{
    constructor(name,age){
        this.name =name;
        this.age = age;
    }
    talk(){
        console.log("hello world");
    }
}
let s1 = new students("aman",25);
console.log(s1);
console.log(s1.talk());

// ................................ inheritance ....................................

class parent{
    constructor(name,age){
        this.name =name;
        this.age = age;
    }
    talk(){
        console.log("hello world");
    }
    
}


class student extends parent{
    constructor(marks){
    
        super(name,age)// parent class constructor is being called 
        this.marks= marks;
    }
  
}

class teacher extends parent{
    constructor(name,age,subject){
        super(name,age)// parent class constructor is being called 
        this.subject =subject;
    }
 
}
