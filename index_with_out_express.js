// const http = require('http');
import http from "http";
import {generateLovePercent} from './features.js'
import fs from "fs";
// console.log(generateLovePercent());


// console.log(home)
 

const server =http.createServer((req, res) => {
    if(req.url === "/"){
        res.end(`<h1>Home ${generateLovePercent()}</h1>`);
    }
    if(req.url === "/home"){
        fs.readFile("./index.html", (err, home) =>{
            res.end(home);
        })
        res.end(home);
    }
    if(req.url === "/contact"){
        res.end("<h1>Contact</h1>")
    }
    if(req.url === "/service"){
        res.end("<h1>Service</h1>");
    }
    else{
        res.end("<h1>This is not Found</h1>")
    }
});


server.listen(5000, () => {
    console.log("Server is working");
})