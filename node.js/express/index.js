const express =require("express");
const app =express();
// console.dir(app);

//listen method

let port =3000;
app.listen(port,()=>{
    console.log("app is listening on port");
});

// use method

// app.use((req,res)=>{
//     console.log(req);
// console.log("request recieved");
// res.send("this is a string ");

// });

// // sending a response


// // app.use((req,res)=>{
// // console.log("request recieved");
// // // res.send("this is a basic response");
// // // we also send object in req
// // // res.send({
// // //     name:"apple",
// // //     color:"red",
// // // });
// // // we also send html in req
// // res.send("<h1>fruits</h1> <ul><li>apple</li></ul>")
// // });

// // ................Routing ...........................
// // it is process of selecting a path for traffic in a network or between or across multiple networks

// //get method............................
// app.get("/",(req,res)=>{
//     res.send("hello");
// })

// // app.get("/apple",(req,res)=>{
// //     res.send("you contacted apple path");
// // })
// // app.get("/mango",(req,res)=>{
// //     res.send("you contacted mango path");
// // })
// // // agr upar bale kisi bhi path par request nhi beji to automatically niche bala get call ho jayega

// // app.get("*",(req,res)=>{
// //     res.send("this path does not exit");
// // })

// // Nodeman -- to automatically restart server with code change

// // ...................... path parameters ..........................

// app.get("/:username/:id",(req,res)=>{
//     let {username, id} =req.params;
//     let detail =`<h1> welcome to the page of ${username}</h1>`;
//     res.send(detail);
// })

// // ................... query string ........................

// app.get("/search",(req,res)=>{
//     let {q} =req.query;
//     if(!q){
//         res.send("<h1> not result </h1>")
//     }
//     res.send(`search results for query :${q}`);
// })


// ...................... templating ...........................

// EJS(Embedded javascript templates)
// EJS is a simple templating language that lets you generate HTML markup with plain javascript

