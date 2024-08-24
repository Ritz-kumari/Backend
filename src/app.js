import express from 'express';
import cookieParser from 'cookie-parser';

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
//To store images, json in public we use this
app.use(express.static("public"))
app.use(cookieParser())

// Import Routes
import userRouter from '../routes/user.routes.js'
http://localhost:8000/api/v1/users/register;

// Router decleration
app.use("api/v1/users",userRouter)



export {app}