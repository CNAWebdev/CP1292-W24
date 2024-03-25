const express = require('express')
const app = express()
const port = 3020

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/dog/', (req, res) =>{
    res.send("Woof!");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})