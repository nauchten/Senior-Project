const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = 3000   // This is the port our express server will run on
const app = express();
app.use(bodyParser.json());
app.use(cors());
const api = require('./routes/api')

app.post('/submit', function (req, res){
    console.log(req.body);
    res.status(401).send({"Message": "Data Received"});
})

app.get('/', function(req,res){
    res.send('This is the Humana server running in the background')
})

app.listen(PORT,function(){
    console.log('Server running on local host:' + PORT)

})

