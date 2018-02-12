var Peer = require('../lib/Peer').Peer;
var net = require('net');

var localPeer = true;
var server = net.createServer(function (socket) {
  // server.close();
  // localPeer.destroy();
  //done();
});
server.listen(function () {
  console.log(server.address().address, server.address().port)
  localPeer = new Peer('localhost', server.address().port);
  
  localPeer.on('connect', function(d) {
    console.log("I'm connected!");
  });
  localPeer.on('message', function(d) {
    console.log("I got message "+d.command);
  });
  localPeer.connect();
});
