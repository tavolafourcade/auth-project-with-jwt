import mongoose from "mongoose";
import * as dotenv from 'dotenv'

mongoose.connect(process.env.MONGO_URL)