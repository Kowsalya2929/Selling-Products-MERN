import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import connectDB from './database/connectDB.js'
import contactRoute from './routes/contactRoute.js'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
connectDB()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// const allowedOrigins = [
//   "http://localhost:8000",
//   "https://selling-products-mern.onrender.com" // your frontend
// ];

app.use(cors({
    // origin: "http://localhost:5173",
    origin: "http://localhost:8000",
    credentials: true
}))

app.use(express.json())

app.use('/api/contact',contactRoute)

if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../frontend/dist");

  // Serve static files
  app.use(express.static(frontendPath));

  // Catch-all for React Router
  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port : ${process.env.PORT}`)
})