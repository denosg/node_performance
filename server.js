const express = require('express');
const cluster = require('node:cluster');
const os = require('os');

const app = express()

function delay(duration) {
    const startTime = Date.now()
    while (Date.now() - startTime < duration) {
        //delay
    }
}

app.get('/', (req, res) => {
    res.send(`Performance Example: ${process.pid}`)
})

app.get('/timer', (req, res) => {
    delay(9000);
    res.send(`timer ding: ${process.pid}`)
})

if (cluster.isPrimary) {
    console.log(`Master has been started...`);
    const NUM_WORKERS = os.cpus().length;
    for(let i = 0; i < NUM_WORKERS; i++){
        cluster.fork()
    }
} else {
    console.log(`Worker Process Started.`);
    app.listen(3000)
}

