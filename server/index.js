/**
 * Created by Christian on 15.03.2017.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var users = {};

app.get('/', function(req, res){
  res.send('asd');
});

io.on('connection', function(socket){
  console.log("user connected");

  socket.on('disconnect', function(){
    console.log("user disconnected");
  });

});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
