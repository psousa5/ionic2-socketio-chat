/**
 * Created by Christian on 15.03.2017.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var users = [];

app.get('/', function(req, res){
  res.send('asd');
});

io.on('connection', function(socket){
  socket.on('login', function(nickname) {
    socket.nickname = nickname;
    users.push(socket.nickname);
    socket.emit('list-users', users);
    console.log(users);
  });

  socket.on('logout', function() {
    logout(socket);
    console.log(users);
  });

  socket.on('disconnect', function(){
    logout(socket);
    console.log(users);
  });
});

function logout(socket){
  var i = users.indexOf(socket.nickname);
  if(i != -1) users.splice(i, 1);
}

http.listen(3000, function(){
  console.log('listening on *:3000');
});
