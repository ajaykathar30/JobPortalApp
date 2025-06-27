import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
import userRoute from './routes/user.route.js'
import companyRoute from './routes/company.route.js'
import jobRoute from './routes/job.routes.js'
import applicationRoute from './routes/application.route.js'

dotenv.config({})

const allowedOrigins=[ 'http://localhost:5173','https://jobportalapp-1.onrender.com']
const corsOptions = {
  origin: function(origin,callback) {
    if(!origin || allowedOrigins.includes(origin)){
      callback(null,true)
    }else{
      callback(new Error('Not Allowed by CORS'))
    }
  },
  credentials:true
}

const app = express()
const port = process.env.PORT || 3000
app.use(cors(corsOptions))

// middleware 

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


//apis
app.use('/api/v1/user', userRoute)
app.use('/api/v1/company', companyRoute)
app.use('/api/v1/job',jobRoute)
app.use('/api/v1/application',applicationRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  connectDB()
  console.log(`Example app listening on port ${port}`)
})
