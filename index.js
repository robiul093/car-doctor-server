const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORR || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) =>{
    res.send('server is running')
})

app.listen(port, ()=>{
    console.log(`car doctor servet is running on port ${port}`);
})