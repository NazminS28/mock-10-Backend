const express = require("express");
const { connection } = require("./config/db");
const { authentication } = require("./middleware/Authentication");

const { userController } = require("./Routes/User.route");
require("dotenv").config()

const app= express()
app.use(express.json())
const PORT = process.env.PORT || 7500
app.get("/",(req,res)=>{
    res.send("Welcome to Backend of Mock-11")
})

app.use("/user",userController)
app.use(authentication)

app.listen(PORT, async()=>{
    try{
        await connection
        console.log("connected Successfully")
    }
    catch(err){
        console.log("Error in conntecting DB")

    }

    console.log(`the port is lisiting in ${PORT}`)
})