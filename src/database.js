import mongoose from "mongoose";
import * as dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
  .then(db => console.log('Db connected'))
  .catch(error => console.log(error))