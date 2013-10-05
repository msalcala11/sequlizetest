var express = require('express');
var db = require('./models');
var http = require('http');

var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');

/*    var user = db.sequelize.define(
	'user',
	{
	    firstName: {type: db.Sequelize.STRING},
	    lastName: {type: db.Sequelize.STRING},
	    password: {type: db.Sequelize.STRING},
	    numberOfPets: {type: db.Sequelize.INTEGER},
	}
    );*/

var user = db.user;
    user
	.sync()
	.on('success', function() {	    
	    user.create({
		firstName: 'foo',
		lastName: 'bar',
		password: 'asdfasdf',
		numberOfPets: 0
	    });
	    console.log("input user into DB");
	})
	.on('error', function(e){
	    console.log('Something went wrong!', e)
	});
    exports.user = user;
});

//var port = process.env.PORT || 8080;
//app.listen(port, function() {
  //console.log("Listening on " + port);
//});
app.set('port', process.env.PORT || 8080);
db.sequelize.sync().complete(function(err) {
  if (err) {
    throw err;
  } else {
    http.createServer(app).listen(app.get('port'), function() {
      console.log("Listening on " + app.get('port'));
    });
  }
});
