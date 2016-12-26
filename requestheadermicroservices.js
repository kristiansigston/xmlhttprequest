var express = require('express');
var app = express();
var http = require('http');
var stringify = require("json-stringify-pretty-compact");


app.get('/', function (req, res){
  
  var blah = convertToArray(req.headers);
  //var parsed = JSON.stringify(req.headers[accept-language])
 // parsed =JSON.parse(parsed);
  res.send(blah);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

function convertToArray(headers){
  var parsedArray = JSON.stringify(headers);
  parsedArray = JSON.parse(parsedArray);
  return {
    "ipaddress":parsedArray['x-forwarded-for'],
    "language":parsedArray['accept-language'].split(',')[0],
    "software": regexy(parsedArray['user-agent'])
  };
  
}

function regexy (input){
return /\((.*?)\)/g.exec(input)[1]; //matches the second group in brackets without the enclosing brackets

}