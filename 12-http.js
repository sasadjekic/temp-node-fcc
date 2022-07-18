const http = require('http');

//res, req objekti
const server = http.createServer((req, res)=>{
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