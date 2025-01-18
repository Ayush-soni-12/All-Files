const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Get the client
const mysql = require('mysql2');
const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password:'121212'
  });
  // let q ="INSERT INTO user( id, username, email, password) VALUES ?";

let  createRandomUser=  ()=> {
  return [
     faker.string.uuid(),
     faker.internet.username(), // before version 9.1.0, use userName()
     faker.internet.email(), 
     faker.internet.password(),
  ]
};
// let data =[];
// for (let i =1;i<=10; i++){r
//   data.push(createRandomUser());
// }


// try{
//      connection.query(q ,[data] , (err,result)=>{
//       if(err) throw err;
//       console.log(result);
//      })
// } catch(err){
//   console.log(err);
// }
// connection.end();

 // count route
app.get("/",(req,res)=>{
  let q ="SELECT COUNT(*) FROM user";
  try{
     connection.query(q , (err,result)=>{
      if(err) throw err;
      // console.log(result[0]['COUNT(*)']);
      let count = result[0]['COUNT(*)'];
      res.render("home.ejs",{ count});
     })
} catch(err){
  console.log(err);
  res.send("some error occured");
}
})

// show  route

app.get("/users",(req,res)=>{
  let q = "SELECT * FROM user";
  try{
    connection.query(q , (err,results)=>{
     if(err) throw err;
  // console.log(result);
     res.render("show.ejs",{results});
    })
} catch(err){
 console.log(err);
 res.send("some error occured");
}

// edit route
})
app.get("/user/:id/edit",(req,res)=>{{
  let{id}=req.params;
  let q = `SELECT * FROM user WHERE id ='${id}'`;

  try {
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user = result[0];
      res.render("edit.ejs",{user});
    })
  }catch(err){
    console.log(err);
    res.send("some error occured");
   }
  
}})

// update route


app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { username, password } = req.body;
  let q = `UPDATE user SET username = ? WHERE id = ?`;
  try {
    connection.query(q, [username, id], (err, result) => {
      if (err) throw err;
      if (result.affectedRows === 0) {
        res.send("User not found");
      } else {
        let q2 = `SELECT password FROM user WHERE id = ?`;
        connection.query(q2, [id], (err, result) => {
          if (err) throw err;
          let user = result[0];
          if (password != user.password) {
            res.send("password not matched");
          } else {
            res.redirect("/users");
          }
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error occurred");
  }
});

// deelte route
app.delete("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  console.log(`Received request to delete user with id: ${id}`);
  let q = `DELETE FROM user WHERE id = ?`;
  try {
    connection.query(q, [id], (err, result) => {
      if (err) throw err;
      if (result.affectedRows === 0) {
        console.log(`No user found with id: ${id}`);
        res.send("User not found");
      } else {
        console.log(`Deleted user with id: ${id}`);
        res.redirect("/users");
      }
    });
  } catch (err) {
    console.error("Caught error:", err);
    res.send("Some error occurred");
  
  }});
  // Add route
  app.get("/user/add",(req,res)=>{
    res.render("add.ejs");

  })

  // add route
  app.post("/user/add/new",(req,res)=>{
    let {username,email,password}=req.body;
    let id = faker.string.uuid();
    let q = "INSERt INTO user(id ,username,email,password) VALUES (?,?,?,?)";
    try{
      connection.query(q,[id,username,email,password],(err,result)=>{
        if(err) throw err;
        res.redirect("/users");

      });
    }catch(err){
      console.log(err);
      res.send("some error occured");
    }
  })

  

app.listen (8080,()=>{
  console.log("Server is running on port 8080");
})


