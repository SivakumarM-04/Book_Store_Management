const express = require('express')
const app = express()
const port = require('./config')
const mongoose = require('mongoose')
const bookRoutes = require('./routes/bookRoutes')
const cors =require('cors')
app.use(express.json())
app.use(cors())
// app.use(cors({
//     origin : "http://localhost:3000",
//     method : ['GET','PUT','POST','DELETE'],
//     allowedHeaders : ['content-type']
// }))

app.get('/',(req,res)=>{
    console.log(req);
    res.status(234).send("Started with bookstore project")
    
})

app.use('/books',bookRoutes)

mongoose.connect('mongodb://127.0.0.1:27017/book-store')
.then(()=>{
    console.log("DB Connected");
    app.listen(port,()=>{
        console.log("App is listening to the Port : ",port);
    })
})
.catch((err)=>{
    console.log("Connection Error : ",err);
})