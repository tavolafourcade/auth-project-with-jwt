import { Schema, model } from 'mongoose'

const productSchema = new Schema({
  name: String,
  category: String,
  price: Number,
  imgURL: String
},{
  timestamps: true, // Cada vez que se guarde un dato vaya con su fecha de creación y fecha de actualización
  versionKey: false // Para que cada vez que se crea un documento no aparezca __v
})

export default model('Product', productSchema) // Exporto el modelo basado en productSchema