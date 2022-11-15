const express = require('express')
const cors = require('cors')
require('dotenv').config

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

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Server is currently listening on port ${PORT}`)
})
