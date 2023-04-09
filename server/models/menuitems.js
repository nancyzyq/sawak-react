var mongoose = require('mongoose')
var Schema = mongoose.Schema
// mongoose.set('debug', true)
// PLU model define
var menuitemsSchema = new mongoose.Schema({
  id: String,
  name: String,
  type: { type: Schema.Types.ObjectId, ref: 'categories' },
  price: String,
  // image: String,
  number: String,
  // active: { type: Boolean, default: false },
  // ingredients1: [String],
  ingredients: [{ type: Schema.Types.ObjectId, ref: 'ingredients' }],
  created: { type: Date, default: Date.now},
  updated:{ type: Date, default: Date.now }
},
{ collection: 'menuitems' })

// foodSchema.index({ id:1 })

module.exports = mongoose.model('menuitems', menuitemsSchema)
