require('dotenv').load();

var mongoose = require('mongoose'),
express = require('express'),
request = require('request'),
cors = require('cors'),
app = express(),
bodyParser = require("body-parser"),
methodOverride = require('method-override'),
morgan = require('morgan');


app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true})); 
app.use(methodOverride('_method'));
app.use(cors());

var url = 'http://ufc-data-api.ufc.com/api/v1/us/';
var fs_api ='https://api.foursquare.com/v2/venues/search?client_id='+process.env.FS_CLIENTID+'&client_secret='+process.env.FS_CLIENTSECRET+'&v=20130815&ll=40.7,-74&query=';

//UFC API Starts Here
app.get('/news', function(req,res){
	request('http://espn.go.com/mma/story/_/id/13402635/espn-men-pound-pound-rankings/?xhr=1', function(error, response, body) {
	  if (error || response.statusCode !== 200) return res.status(404).json({error: error});
	  res.status(200).json(body);
	});
});

app.get('/fighters', function(req,res){
	request(url+'fighters', function(error, response, body) {
	  if (error || response.statusCode !== 200) return res.status(404).json({error: error});
	  res.status(200).json(body);
	});
});

app.get('/events', function(req,res){
	request(url+'events', function(error, response, body) {
	  if (error || response.statusCode !== 200) return res.status(404).json({error: error});
	  res.status(200).json(body);
	});
});

app.get('/media', function(req,res){
	request(url+'media', function(error, response, body) {
	  if (error || response.statusCode !== 200) return res.status(404).json({error: error});
	  res.status(200).json(body);
	});
});

//Foursquare API Starts Here
app.get('/mma', function(req,res){
	request(fs_api+'mma', function(error, response, body) {
	  if (error || response.statusCode !== 200) return res.status(404).json({error: error});
	  res.status(200).json(body);
	});
});

app.get('/boxing', function(req,res){
	request(fs_api+'boxing', function(error, response, body) {
	  if (error || response.statusCode !== 200) return res.status(404).json({error: error});
	  res.status(200).json(body);
	});
});

app.get('/bjj', function(req,res){
	request(fs_api+'bjj', function(error, response, body) {
	  if (error || response.statusCode !== 200) return res.status(404).json({error: error});
	  res.status(200).json(body);
	});
});

app.get('/muaythai', function(req,res){
	request(fs_api+'muay&thai', function(error, response, body) {
	  if (error || response.statusCode !== 200) return res.status(404).json({error: error});
	  res.status(200).json(body);
	});
});

app.get('/wrestling', function(req,res){
	request(fs_api+'wrestling', function(error, response, body) {
	  if (error || response.statusCode !== 200) return res.status(404).json({error: error});
	  res.status(200).json(body);
	});
});

app.get('/yoga', function(req,res){
	request(fs_api+'yoga', function(error, response, body) {
	  if (error || response.statusCode !== 200) return res.status(404).json({error: error});
	  res.status(200).json(body);
	});
});

app.get('/fitness', function(req,res){
	request(fs_api+'fitness&gym', function(error, response, body) {
	  if (error || response.statusCode !== 200) return res.status(404).json({error: error});
	  res.status(200).json(body);
	});
});


app.listen(3001,function(req,res){
	console.log("App running on localhost 3001");
});