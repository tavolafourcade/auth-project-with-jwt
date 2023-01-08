import { Schema, model, trusted } from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roles: [
    {
    ref: 'Role',
    type: Schema.Types.ObjectId
    },
  ]
},
{
  timestamps: true,
  versionKey: false
})

// Generando un texto cifrado a partir de la contraseña
userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

// Comparando la contraseña cifrada con la contraseña que se recibe
userSchema.statics.comparePassword = async (password, receivedPassword) => {
  const comparison = await bcrypt.compare(password, receivedPassword) // Si las contraseñas coinciden retorna un true

  return comparison
}
export default model('User', userSchema)