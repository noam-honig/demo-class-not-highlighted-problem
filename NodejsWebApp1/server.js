"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
var y;
var x;
var classFromThisFile = (function () {
    function classFromThisFile() {
    }
    return classFromThisFile;
}());
//# sourceMappingURL=server.js.map