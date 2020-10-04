var http = require('http');
var express = require('express');
var twilio = require('twilio'); //include twillo after installing twillo in node modules
var app = express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());//support json urlencoded bodies
app.use(bodyParser.urlencoded({extended:true}));
var twilio = require('twilio');


var path=require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/",function(req,res){
	res.render("index");
});



app.post('/ss', function(req, res) {
	 console.log(req.body.num);
  var accountSid = 'AC8xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; 
  // Your Account SID from www.twilio.com/console 
  
var authToken = 'f9xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';   
// Your Auth Token from www.twilio.com/console

var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello how are you?',
    to: 'XXXXXXXXXXXX',  // Text this number // THIS NUMBER MUST BE VERIFIED FROM YOUR TWILIO ACCOUNT 
    from: 'XXXXXXXXXX' // From a valid Twilio number
})
.then((message) => console.log(message.sid));
res.end();
});

http.createServer(app).listen(8080, function () {
  console.log("Express server listening on port 8080");
});
