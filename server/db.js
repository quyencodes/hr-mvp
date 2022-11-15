// import mongoose
import mongoose from 'mongoose'

// connect to mongoose
mongoose.connect('mongodb://localhost:27017/mvpapp').then(() => {
  console.log('Successfully connected to database')
})

// create a mongoose schema
const mvpSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
  },
  message: {
    type: String,
    required: true,
  },
})

// create model
const db = mongoose.model('mvpSchema', mvpSchema)

// export mongoose database
export default db
