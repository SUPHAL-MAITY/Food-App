import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
    // origin: process.env.CORS_ORIGIN,
    origin: "https://food-app-delta-ecru.vercel.app",  
    credentials: true
}))




app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())



import authRouter from  "./routes/auth.routes.js"
import userRouter from "./routes/user.routes.js"
import restaurantRouter from "./routes/restaurant.routes.js"
import foodRouter from  "./routes/food.routes.js"
import categoryRouter from  "./routes/category.routes.js"




app.use("/api/user",authRouter)
app.use("/api/userdetails",userRouter)
app.use("/api/restaurant",restaurantRouter)
app.use("/api/food",foodRouter)
app.use("/api/category",categoryRouter)



export { app }