const express = require("express");
const app = express();
 const port  = 8000;
 const path = require("path");
 app.set("view engine ","ejs");
 app.set("views",path.join(__dirname,"views"));
 app.use(express.static(path.join(__dirname,"public")));
 app.use(express.urlencoded({extended:true}));
 const { v4: uuidv4 } = require('uuid'); // uuid automatically generate id 
const methodOverride = require("method-override");
 app.use(methodOverride("_method"));

 app.listen(port ,()=>{
    console.log("listening to port :8000");
 })

 let posts =[{
   id: uuidv4(),
   username: "Ayush soni",
   content: " i love coding",
 },
{
   id:uuidv4(),
   username:"harsh sahu",
   content: "i study in bkd college",

},
{
   id:uuidv4(),
   username: "rishi sahu",
   content : "I study in bundelkhand university jhansi ",
},
];
app.get("/posts",(req,res)=>{
   res.render("index.ejs",{posts});
})
app.get("/posts/new",(req,res)=>{
   res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
   let {username, content } = req.body;
   let id =uuidv4();
   posts.push({id ,username,content});
   res.redirect("/posts")
})
app.get("/posts/:id",(req,res)=>{
   let {id }=req.params;
   let post = posts.find((p)=>id==p.id);
   res.render("post.ejs",{post});
})
app.get("/posts/:id/edit",(req,res)=>{
   let {id }=req.params;
   let post = posts.find((p)=>id==p.id);
   res.render("edit.ejs",{post})

});
app.patch("/posts/:id",(req,res)=>{
let {id}=req.params;
let newcontent =req.body.content;
let post = posts.find((p)=>id==p.id);
post.content=newcontent;
res.redirect("/posts");
})

app.delete("/posts/:id",(req,res)=>{
   let {id} = req.params;
   posts =posts.filter((p)=>id!==p.id);
   res.redirect("/posts");
})

