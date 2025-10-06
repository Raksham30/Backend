const express = require('express');
const app = express();
const path = require("path");

let port = 8080; // 8080

app.set("view engine" , "ejs");

app.set("views" , path.join(__dirname , "/views"));

app.get("/" , (req,res)=>{
    res.render("home");
})

app.get("/hello" , (req,res)=>{
    res.send("Hloo")
})


app.listen(port , ()=>{
    console.log(`app is listening on port ${port}`);
})