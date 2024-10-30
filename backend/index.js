import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"
import cors from 'cors'
import book_router from "./Routes/book_route.js";
import user_router from "./Routes/user_Route.js"

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config();

const PORT = process.env.PORT
const uri = process.env.MongodbURI

//Connect to Mongodb
try {
  mongoose.connect(uri)
  console.log("Connected")
} catch (error) {
  console(error)
}

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//Definig Routes

app.use("/book",book_router)
app.use("/Users",user_router)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
