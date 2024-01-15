//import expr
const express=require("express")
const app=express()
//import connectDB
const connectDB=require('./config/connectDB')
connectDB()
//middleware
app.use(express.json())
//routes
app.use('api/contacts',require('/routes/contact'))
//creation serveur
const port=5000
app.listen(port,(err)=>{
    err? console.log("ERROR"):console.log(`server running on port ${port}`)
})