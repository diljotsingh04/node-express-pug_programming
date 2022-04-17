const express = require("express");

const app = express();

app.post("/",(req, res)=>{
    res.send("This is the first pug website to checking the forms");
});

app.listen(80,()=>{
    console.log("Server started successfully");
});