var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    // res.sendfile('index.html');
    if (req.path.indexOf('favicon') > -1) {
    	return;
    }
    console.log(req.query);
    var q = req.query,
    	  kfuin = q.kfuin,
    	  cb = q.cb;

    var result = {
    	result: 0
    };

    res.end(cb + '(' + JSON.stringify(result) + ')');
});

io.on('connection', function(socket){
    console.log('a user connected');

    io.on('message', function(data) {
    	console.log(data);
    });

    io.on('disconnect', function() {
    	console.log('user disconnected');
    })
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});