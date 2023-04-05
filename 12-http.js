const http = require('http');

//res, req objekti
const server = http.createServer((req, res)=>{

    console.log(req)
    if(req.url === "/"){
        res.end("Home page")
    }
    if(req.url === "/about"){
        res.end('About')
    }
    res.end(`<h1>404</h1>
    <a href='/'>Back</a>`)
    //res.write('Welcome to our home page')
    //res.end()
})

server.listen(5000)

//Using Event Emitter API  - Server Extends om Emmiter kao i mnogi moduli
const server2 = http.createServer()
//emits request event
//subscribe to it/listen to it/ respond to it - REQUEST je jedan od eventa http.servera
server2.on('request', (req, res) => {
    res.end('Welcome')
})

server2.listen(4000)