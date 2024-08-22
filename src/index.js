// import mongoose from 'mongoose';
// import { DB_NAME } from './constants';

// require('dotenv').config()
import dotenv from "dotenv";
import connectDB from './db/index.js';

dotenv.config({
    path: "./env"
})

connectDB()

.then(() => {

    app.on((error) =>{
        console.log("Error", error)
        throw error
    })

    app.listen(process.env.PORT || 800, () => {
        console.log(`server is runnning at ${process.env.PORT}`)
    })
})
.catch(() => {
    console.log(`MONGODB connection failed`)
})







// function connectDB(){}

// connectDB()

// IIRF () is immediate calling of a function.
/*(async () =>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", () =>{
        console.log("ERROR", error) 
        throw error
       })

       app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on ${process.env.PORT}`)
       })
    }catch(error){
        console.log("ERROR", error) 
        throw error
    }
})()
// In database data is always kept in diffrent continent so we need to use async await, try catch.
*/
