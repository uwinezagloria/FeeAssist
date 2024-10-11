import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const app=express();
app.use(express.json());
const database_string=process.env.DATABASE;
const port=process.env.PORT;
//connect to database
mongoose.connect(database_string)
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`)
        console.log("database connected successfully")
    })
})
.catch((error)=>{
    console.log("database not connected")
    console.log(error.message)
})