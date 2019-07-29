var http = require('http');
var express = require('express');
var twilio = require('twilio');
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
  var accountSid = 'AC84511a70e616f9f0c67545f8ce61d85d'; 
  // Your Account SID from www.twilio.com/console password:laveeshakumra123
  
var authToken = 'f933f85129a8defe22d3ceab00f5cf52';   
// Your Auth Token from www.twilio.com/console

var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello how are you?',
    to: 'XXXXXXXXXXXX',  // Text this number
    from: 'XXXXXXXXXX' // From a valid Twilio number
})
.then((message) => console.log(message.sid));
res.end();
});

http.createServer(app).listen(8080, function () {
  console.log("Express server listening on port 8080");
});