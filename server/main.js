var express = require('express');
var API = require("./api.js");
var app = express();
var PORT = 3000;
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/api/tasks", function(req,res){
     API.getTasks().then(function(result){
        console.log(result)
        res.send(result)
    })
})

app.use(express.static("public"));

app.listen(PORT, function(){
    console.log("Server listening at: %s", PORT);
})