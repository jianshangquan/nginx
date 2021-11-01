const express = require('express');
const env = require('dotenv').config({path:"./server1.env"});
const app = express();
const PORT = process.env.PORT;


app.get('/', (req, res, next) => {
    res.send(process.env.NAME)
})

app.listen(PORT, function(){
    console.log('server start listening on port '+ PORT);
})