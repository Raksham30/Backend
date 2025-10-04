const express = require('express');
const app = express();


// console.dir(app);

let port = 8080; // 8080


//we use app.listen to start the server / to make app listen for requests..

app.listen(port , ()=>{
    console.log(`app is listening on port ${port}`);
})

//when ever req comes to the server app.use is the first thing to do. it listen every request.

// app.use((req , res)=>{
//     console.log("req is comming")

//     //We can send response in different form..

//     // console.log(req)
//     // res.send("this is a basic response");
//     // res.send({
//     //     name: "Raksham",
//     //     age : 19
//     // })
//     // res.send("<h1>Raksham</h1>")
// })


//App.get method  you can give different path to it .


app.get("/" , (req , res)=>{
    res.send("You contacted root path.")
})

app.get("/:username/:id" , (req , res)=>{
    console.log(req.params)
    let userName = req.params.username
    res.send(`Your user name is ${userName}`)
})

app.get("/search" , (req,res)=>{
    let {q} = req.query;  
    if(!q){
        res.send("Nothing searched")
    }
    res.send(`Search result for query ${q}`)
})

// app.get("/help" , (req , res)=>{
//     res.send("You contacted help path.")
// })


// app.get("/contact" , (req , res)=>{
//     res.send("You contacted contact path.")
// })

//This is for if path dosenot match.
// app.use((req, res) => {
//     res.status(404).send("404 Not found");
// });

//Post request 

// app.post("/" , (req , res)=>{
//     res.send("You sent a post request")
// })