const express = require("express");
const app = express();
 const port  = 8000;
 const path = require("path");
 app.set("view engine ","ejs");
 app.set("views",path.join(__dirname,"views"));
 app.use(express.static(path.join(__dirname,"public")));
 app.use(express.urlencoded({extended:true}));
//  const { v4: uuidv4 } = require('uuid'); // uuid automatically generate id 
const methodOverride = require("method-override");
 app.use(methodOverride("_method"));

 app.listen(port ,()=>{
    console.log("listening to port :8000");
 });
 app.get("/search",(req,res)=>{
    let animal = require("./animal.json");
    res.render("intro.ejs",{animal});
 })
 app.get("/search/:name",(req,res)=>{
    let { name } =req.params;
    let animal = require("./animal.json");
    let data =animal.animals.find((p)=>name==p.name);
   //  console.log(data);
    res.render("details.ejs",{data});
 })