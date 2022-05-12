const express = require('express');
const app = express();
const PORT = 3000;


app.get('/',(req,res)=>{
    res.send("<h1>Hello world descomplica  node impulsotec teste</h1>")
})

app.listen(PORT,()=>{
    console.log(`servidor rodando na url http://localhost:${PORT}`);
})