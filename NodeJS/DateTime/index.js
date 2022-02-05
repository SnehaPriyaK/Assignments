const os=require('os');
//console.log(os.cpus());
//console.log(os.homedir());
//console.log(os.hostname());
//console.log(os.platform());
//console.log(os.tmpdir());
//console.log(os.uptime());

const http = require('http');
const fs = require('fs');
const PORT = 8000;
const timestamp = new Date().toString();

fs.writeFileSync('date-time.txt',timestamp);

http.createServer((req, res) => {

    fs.readFile('date-time.txt',(err,data)=>{
        res.writeHeader(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
    })

}).listen(PORT,() => {
    console.log('listening to ',PORT)
});