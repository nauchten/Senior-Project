// Requiring express in our server
const express = require('express');
const app = express();

// Defining get request at '/' route
app.get('/', function(req, res) {
    res.json({
        number: 1
    });
});

// Setting the server to listen at port 3000
app.listen(3000, function(req, res) {
    console.log("Server is running at port 3000");
});
