import express from 'express'
import cors from 'cors'
// const { createOne, getOne, getAll, updateOne, deleteOne } = require('./model.js')
import { createOne, getOne, getAll, updateOne, deleteOne } from './model.js'
import config from 'dotenv'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/mvp', (req, res) => {
  res.status(200).json('Got a GET request')
})

app.post('/mvp', (req, res) => {
  res.status(201).json('Got a POST request')
})

app.put('/mvp/:id', (req, res) => {
  res.status(201).json('Got a PUT request at /id')
})

app.delete('/mvp/:id', (req, res) => {
  res.status(200).json('Got a DELETE request at /id')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is currently listening on port ${PORT}`)
})
