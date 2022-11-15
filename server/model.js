import db from './db.js'

export function createOne(info) {
  // https://mongoosejs.com/docs/api.html#model_Model-create
  const result = db.create(info)
  return result
}

export function getOne(id) {
  // https://mongoosejs.com/docs/api.html#model_Model-find
  return db.find({ _id: id })
}

export function getAll() {
  // https://mongoosejs.com/docs/api.html#model_Model-find
  const result = db.find({})
  return result
}

export function updateOne(id, update) {
  // https://mongoosejs.com/docs/api.html#model_Model-findByIdAndUpdate
  const queryID = {
    _id: id,
  }
  const updateMessage = {
    message: update,
  }
  const result = db.findByIdAndUpdate(queryID, updateMessage)
  return result
}

export function deleteOne(id) {
  //https://mongoosejs.com/docs/api.html#model_Model-findByIdAndDelete
  const result = db.findByIdAndDelete({ _id: id })
  return result
}
