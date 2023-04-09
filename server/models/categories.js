var mongoose = require('mongoose')

var categoriesSchema = new mongoose.Schema({
  id: String,
  name: String,
  created: { type: Date, default: Date.now},
  updated:{ type: Date, default: Date.now }
},
{ collection: 'categories' })

// ingredientsSchema.index({ id:1 })

module.exports = mongoose.model('categories', categoriesSchema)
