const express = require('express');

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

console.log(`Worker Process Started.`);
app.listen(3000)