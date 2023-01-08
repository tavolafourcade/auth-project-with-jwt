import { Schema, model, trusted } from 'mongoose'

const userSchema = new Schema({
  username: {
    type: String,
    unique: trusted,
    email: {
      type: string,
      unique: true
    },
    password: {
      type: string,
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