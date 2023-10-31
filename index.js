const express = require('express')
const app = express()

app.get("/test", (req, res) => {
    res.send("Hello, world");
})

port = process.env.PORT || 8000;

app.listen(port,()=>{console.log(`Running on port ${port}`)})
