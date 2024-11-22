const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.status(200).send("Welcome to the homepage :)")
});

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`server is runniing on port: ${PORT}`);
});