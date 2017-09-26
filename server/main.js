var express = require('express');
var API = require("./api.js");
var app = express();
var PORT = 3000;

app.get("/api/books", function(req,res){
    res.send(API.getBooks())
})

app.use(express.static("public"));

app.listen(PORT, function(){
    console.log("Server listening at: %s", PORT);
})

console.log("hello world")

