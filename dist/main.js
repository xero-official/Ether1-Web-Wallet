const net = require('net');

const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.IpcProvider("/root/.ether1/geth.ipc", net))
console.log(web3.isConnected()) // returns true if connected

var http = require("http");

//Stat Outputs

var network = web3.eth.getBalance("0xC5b59a9AeFa0d7D1Bf5216dc5D52CD9606293c8E", function (error, result) {
    if (!error) {
        console.log(result);
    } else {
        console.error(error);
    }
});

//END

// HTML Output

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end("<!DOCTYPE html>\n" +
        "<html lang=\"en\">\n" +
        "<head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <title>ethernode.biz</title>\n" +
        "</head>\n" +
        "<body>\n" +
        "<p>ethernode.biz</p>" +
        "<center>\n" +
        "</center>\n " +
        "<p> Geth Version : " + network +"</p>\n" +
        "</body>\n" +
        "</html>\n");
}).listen(50000);

console.log('Server running at http://127.0.0.1:50000/');


//END
