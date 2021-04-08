var express = require('express')
var ejs = require('ejs');
var localtunnel = require('localtunnel');

var app = express();

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.static(__dirname, 'public'));
  app.engine("html", ejs.renderFile)
});

(async () => {
  const tunnel = await localtunnel({ port: 3000 , host: 'https://rachel.ml'});

  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  console.log(tunnel.url);

  tunnel.on('close', () => {
    console.log('tunnels are closed...');
  });
  
  tunnel.on('error', err => {
    console.log(err);
  });s
})();

app.get('/', (req, res) => {
  res.render(__dirname+"/views/index.html");
});

app.listen(3000, () => {
  console.log("3000 is the port");
})
