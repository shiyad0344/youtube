import mongoose from "mongoose";

import { DB_NAME } from "../constants";

const connectDb= async()=>{
       try {
          await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  


       } catch (error) {
         console.error("mongodb connection error",error);
         process.exit(1)
       }
}


export  default connectDb