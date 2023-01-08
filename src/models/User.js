import { Schema, model, trusted } from 'mongoose'

const userSchema = new Schema({
  username: {
    type: String,
    unique: trusted,
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
    ],
    timestamps: true,
    versionKey: false
  }
})

export default userSchema;