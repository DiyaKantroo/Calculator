const express = require("express") ;
const bodyParser = require( "body-parser");

const app = express();

//app.use(bodyParser.urlencoded());

//app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/" , function(req, res){
    res.sendFile(__dirname + "/index.html");           // send html file over the server instead of a single response
})
                                                      // __dirname gives the location of the current file, hence 
                                                     // addresss of file can be appended.

app.post("/" , function(req,res){
    
    console.log(req.body);
    res.send("hello");
})

app.listen(3000, function()
{
    console.log("server started ar port 3000");
    
})