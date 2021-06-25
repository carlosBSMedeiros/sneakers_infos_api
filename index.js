const express = require('express')
const requireDir = require('require-dir')

const app = express()

app.use(express.json())
require('./app/database/mongo')()
requireDir('./app/src/models')

app.get('/', (req,res) => {
    res.send({"msg":"oi!"})
})

const PORT = process.env.PORT || 3333;

app.listen(PORT , () => console.log(`Servidor online na porta ${PORT}`));