var express = require('express')
var ejs = require('ejs');
var localtunnel = require('localtunnel');

console.log(process.argv);

var app = express();

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.static(__dirname, 'public'));
  app.engine("html", ejs.renderFile)
});

(async () => {
  const tunnel = await localtunnel({ port: 3000 , subdomain: process.argv.subdomain ? process.argv.subdomain : '' });

  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  console.log(tunnel.url);

  console.log("current events happening with the tunnel...");

  tunnel.on('close', () => {
    console.log('tunnels are closed...');
  });
  
  tunnel.on('error', err => {
    console.log(err);
  });

  tunnel.on('request', info => {
    console.log(JSON.stringify(info));
  });
})();

app.get('/', (req, res) => {
  res.render(__dirname+"/views/index.html");
});

app.listen(3000, () => {
  console.log("3000 is the port");
})
