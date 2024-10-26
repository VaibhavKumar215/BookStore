import express from "express";
import dotenv from "dotenv";
import mongose from "mongoose"
const app = express()
dotenv.config();
const PORT = process.env.PORT
const uri = process.env.Mongodb

try {
  mongose.connect(uri)
  console.log("Connected")
} catch (error) {
  console(error)
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Connect to Mongodb


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})