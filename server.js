const express = require('express');
const cluster = require('cluster');

const app = express()

function delay(duration) {
    const startTime = Date.now()
    while(Date.now() - startTime < duration){
        //delay
    }
}

app.get('/', (req, res) => {
    res.send('Performance Example')
})

app.get('/timer', (req, res) => {
    delay(9000);
    res.send('timer ding')
})

app.listen(3000)