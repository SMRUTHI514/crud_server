require('dotenv').config()

const express=require('express')
const cors=require('cors')
const router=require('./Routes/routes')

require('./Connection/db')


const crudServer=express()

crudServer.use(cors())
crudServer.use(express.json())
crudServer.use(router)

const PORT=3000 || process.env.PORT

crudServer.listen(PORT,()=>{
    console.log(`server Running at : ${PORT}`)
})

crudServer.get('/',(req,res)=>{
    res.send("<h1>Crud App Server Running!!</h1>")
})