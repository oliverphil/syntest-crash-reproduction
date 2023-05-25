const http = require('http-server');

http.createServer({before: ['crash']});
