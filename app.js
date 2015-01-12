'use strict';

//Setup Modules
var express = require('express');
var bodyParser = require('body-parser');

//Setup Middleware
var app = express();
var nano = require('nano')('LINK FROM CLOUDANTDB');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

//Twilio
var twilio = require('twilio');
var client = new twilio.RestClient('TWILIO_ID', 'TWILIO_PSWD');


app.use(app.router);
app.use(express.errorHandler());
app.use(express.static(__dirname + '/public')); 
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); 

//Create database called 'testdb'
//nano.db.create('testdb');
var testdb = nano.use('testdb');

//Get list of directories inside 'testdb'
var counter = 0;
testdb.list(function(err, body) {
 	if (!err) {
    	body.rows.forEach(function(doc) {
    		counter++;
    	});
  	}
});


//Render Pages
app.get('/', function(req, res){
	res.render('index');
});

app.get('/logedIn',function(req,res){
	res.render('logedIn');
});

app.get('/registerwait',function(req,res){
	res.render('registerwait');
});

app.get('/applying',function(req,res){
	res.render('applying');
});

app.get('/notaccepted',function(req,res){
	res.render('notaccepted');
});

//Random function
function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

//New user register 
app.post("/register", function(req, res){
	console.log("------- Register -------");

	var name = req.body.name;
	console.log("Name: " + name);

	var mail = req.body.mail;
	var remail = req.body.reentermail;
	console.log("Mail: " + mail);

	var psswd = req.body.password;
	var repsswd = req.body.reenterpassword;
	console.log("Password: " + psswd);

	var random=randomIntInc(0,100000);
	console.log("Code: " + random);

	var accept = false;

	//Test if mail and password are reentered correctly
	if(remail==mail && psswd==repsswd) {
		console.log('Passwort und Mail passt');
		var user = {
			'name': name,
			'password':psswd,
			'mail': mail,
			'applycode':random,
			'accept':accept
		}
		var counterString = counter + '';
		console.log(counterString);
		
		//Insert user to database
		testdb.insert({"User": user}, counterString, function(err, body, header) {
			if(!err) {
				console.log(name + ' registered successfully');
				res.render('registerwait');
				counter++;

				//Send SMS With Usermail and Applying Code
				client.sendSms({
					    to:'ADMIN_PHONE_NUMBER',
					    from:'TWILIO_NUMBER',
					    body: mail + ' wants to be a member. Accept with this code: '+ random 
					}, function(error, message) {
					    if (!error) {
					        console.log('Success! The SID for this SMS message is:');
					        console.log(message.sid);
					        console.log('Message sent on:');
					        console.log(message.dateCreated);
					    } else {
					        console.log('Oops! There was an error.');
					    }
				});

			//If there is a error with insert		
			} else {
				res.render('index');
			}
		});
	//If password and mail are not the same in their reenter fields
	} else {
		res.render('index');
	}
});


//User tries to log in
app.post("/logincame", function(req, res){
	console.log("------- Login -------");

	var loginmail = req.body.loginmail;
	console.log("Mail: " + loginmail);

	var loginpsswd = req.body.loginpassword;
	console.log("Psswd: " + loginpsswd);

	var angemeldet = false;
	var idCounter = counter - 1;
	function reapeter(i) {
		if (i < counter) {
			var indexValue = '' + i;
			testdb.get(indexValue, { revs_info: true }, function(err, body) {
				if (!err){
					if (body.User.mail === loginmail && body.User.password === loginpsswd && body.User.accept == true){
						console.log(body.User.mail + ' loged in');
						angemeldet = true;
						res.render('logedIn');
						
					} else {
						
						if (i == idCounter) {
							if (angemeldet == false){
								res.render('index');
							}
						}
					}
				}
			});
			reapeter(i + 1);
		}
	}
	reapeter(0);
});

//To the applying site the new user
app.post("/toapply", function(req, res){
	res.render('applying');
});

//Apply the new user
app.post("/apply", function(req, res){
	console.log("------- Apply -------");

	var mail = req.body.applymail;
	console.log("Mail: " + mail);

	var code = req.body.applycode;
	console.log("Code: " + code);

	var accepted = false;
	var newCounter = counter - 1;
	function reapeter(i) {
		if (i < counter) {
			var indexV = '' + i;
			testdb.get(indexV, { revs_info: true }, function(err, body) {
				if (!err){
					var name= body.User.name;
						var psswd = body.User.password;
						var mail = body.User.mail;
						var random = body.User.applycode;
						var rev = body._rev;
						var id = body._id;
					console.log('Mail: ' + body.User.mail + ' Code: ' + body.User.applycode);
					if (body.User.mail == mail && body.User.applycode == code){
						

						console.log(body.User.mail + ' was accepted');
						accepted = true;
						

						testdb.destroy(indexV, body._rev, function(err, body) {
						  if (!err)
						    console.log(body);
						});
						

						var user = {
							'name': name,
							'password':psswd,
							'mail': mail,
							'applycode':random,
							'accept':true
						}
						
						console.log(id);
						
						//Insert user to database
						testdb.insert({"User": user}, id, function(err, body, header) {
							if(!err) {
								console.log(name + ' successfully accepted');
								res.render('index');
								counter++;

							} else {
								res.render('registerwait');
							}
						});
						//Datenbankeintrag ENDE

					
					} else {
						if (i == newCounter) {
							if (accepted == false){
								res.render('notaccepted');
							}
						}
					}
				}
			});
			reapeter(i + 1);
		}
	}
	reapeter(0);
});

//Bluemix Credentials and Server information 
var appInfo = JSON.parse(process.env.VCAP_APPLICATION || "{}");
var services = JSON.parse(process.env.VCAP_SERVICES || "{}");
var host = (process.env.VCAP_APP_HOST || 'localhost');
var port = (process.env.VCAP_APP_PORT || 3000);

// Start server
app.listen(port, host);
console.log('App started on port ' + port);

