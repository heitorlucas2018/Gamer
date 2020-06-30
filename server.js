const { Console } = require('console');
var http = require('http'),
    config = require('./config'),
    fileSistem = require('fs'),
    parse = require('url').parse,
    types = config.types,
    rootFolder = config.rootFolder,
    defaultIndex = config.defaultIndex;

module.exports = http.createServer()
    .on('request', onRequest)
    .listen(config.port, function() {
        console.log(`Server rodando na porta ${config.port}`)
    });

function onRequest(req, res) {
    var filename = parse(req.url).pathname,
        fullPath,
        extension;

    if (filename === '/') {
        filename = defaultIndex;
    }

    fullPath = rootFolder + filename;
    extension = filename.substr(filename.lastIndexOf('.') + 1);

    fileHandler(fullPath, function(data) {
        res.writeHead(200, {
            'Content-Type': types[extension] || 'text/plain',
            'Content-Length': data.length
        });
        res.end(data);

    }, function(err) {
        res.writeHead(404);
        res.end();
    });
}


function fileHandler(filename, successFn, errorFn) {
    fileSistem.readFile(filename, function(err, data) {
        if (err) {
            errorFn(err);
            console.error('ERROR::', err)
        } else {
            successFn(data);
        }
    });
};