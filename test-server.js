const { createServer} = require('node:http');

const hostname = '127.0.0.1';
const port = 8000;

const server = createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if (req.url == "/test"){
        res.end('this is test');
    } else if(req.url == "/health"){
        res.end('server is alive');
    } else{
        res.end("hellow world");
    }
});

server.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}`)
})