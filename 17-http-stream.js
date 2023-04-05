const http = require('http')
const fs = require('fs')

http.createServer(function(req, res) {
    //Demonstracija responsa prekosihronog citanja celog fajla
    //const text = fs.readFileSync('./content/big.txt', 'utf8')
    //res.end(text)

    //A sad isti fajl da posaljemo u delovima (chunks)
    const fileStream = fs.createReadStream('./content/big.txt', {encoding: 'utf8'})
    fileStream.on('open', (data) => {
        //PIPE metod - Kreiranje read stream u write stream tj Response object se moze postaviti kao writable stream
        fileStream.pipe(res)
        
    })
    

    fileStream.on('error', (err) => {
        res.end(err)
    })

}).listen(5000)