const express = require('express')
const app = express()


app.get('/',(request,response) =>{
    response.send('Hello Word!')
})

app.listen(9000)

