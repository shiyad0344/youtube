import mongoose from "mongoose"
// here there are 2 ways to connect the database 1) by using IIFES- immediate invoked function expression
import { DB_NAME } from "./constants"
import connectDb from "./db"

import express from "express"


connectDb()
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is Running at Port:
       ${process.env.PORT}`)
  })
})
.catch((error)=>{
  console.log("MONGO db connection failed !!", error)
})







/*(async()=>{
      try { await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

       app.on()
        
      } catch (error) {
        console.log('ERROR:', error)
        throw error
      }
})()*/