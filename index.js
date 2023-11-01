const express = require('express')
const app = express()
const port = 3009

app.get("/", (req,res) => {
    res.json({
        aneesh: "je"
    })
})

app.listen(port, () => {
    console.log(`app runniung on port ${port}`)
})