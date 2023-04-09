var mongoose = require('mongoose')

var ingredientsSchema = new mongoose.Schema({
  id: String,
  name: String,
  type: String,
  created: { type: Date, default: Date.now},
  updated:{ type: Date, default: Date.now }
},
{ collection: 'ingredients' })

module.exports = mongoose.model('ingredients', ingredientsSchema)
