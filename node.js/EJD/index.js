// ...................... templating ...........................

// EJS(Embedded javascript templates)
// EJS is a simple templating language that lets you generate HTML markup with plain javascript
// for ejs hum res.render use krte hai 
// hum ejs ki file jis dir me banate hai usi me run karate hai lekin agr 
// hume kisi dusri dir se ejs ko run krana hai to hume path method ka use krna pdega 

const express =require("express");
const app =express();
const path =require("path");

const port =8000;

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs");
    
});
app.get("/rolldice",(req,res)=>{
    let diceval = Math.floor(Math.random()*6+1)
    res.render("rolldice.ejs",{ diceval});
    
});

app.set("views",path.join(__dirname,"/views"));

app.listen(port ,()=>{
    console.log("listening on port");
});

// ........................ interpolation index ..........................

// interpolation refers to embedding expressions into marked up text


// passing data to ejs 

// ......................... Instagram ejs .............................

// app.get("/ig/:username",(req,res)=>{
//     const followers =["ayush","aman", "bob"];
//     let {username} = req.params;
//     console.log(username);
//     res.render("instagram.ejs",{username,followers});
// })

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;

    const insta =require("./data.json");
    const data =insta[username]
    // console.log(insta);
    console.log(data);
       
        res.render("instagram.ejs",{ data });
    })
    

    // ..................... serving static files ............................
     app.use(express.static(path.join(__dirname,"public/css")));
     app.use(express.static(path.join(__dirname,"public/js")));

     // .......................... includes ......................................

     

     // ........................... amazon ejs .................................
     app.get("/products/:search",(req,res)=>{
        let {search} = req.params;
        const amazon =require("./amazon.json");
        const data = amazon.products[search];
        console.log(data);
    
        res.render("amazon.ejs",{data});

     })