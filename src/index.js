//require ('dotenv').config()
import dotenv from "dotenv"
// here there are 2 ways to connect the database 1) by using IIFES- immediate invoked function expression
import connectDb from "./db/index.js"
import app from './app.js'
import express from "express"

dotenv.config({
  path:'./env'
})


connectDb()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})









/*(async()=>{
      try { await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

       app.on()
        
      } catch (error) {
        console.log('ERROR:', error)
        throw error
      }
})()*/