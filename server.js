
/**
 * Module dependencies.
 */

var express = require('express')
var ejs = require('ejs');

var app = express();

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.static(__dirname, 'public'));
  app.engine("html", ejs.renderFile)
});

app.get('/', (req, res) => {
  res.render(__dirname+"/views/index.html");
});

app.listen(3000, () => {
  console.log("3000 is the port");
})
