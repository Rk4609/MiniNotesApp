import { DB_NAME } from "../constants.js"
import mongoose from "mongoose"

const connectDB = async () => {
  try {
    const connectionDB = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    )
    console.log(
      `\n MongodDB connected || DB HOST : ${connectionDB.connection.host}`
    )
  } catch (error) {
    console.log("MONGO_DB connection Failed", error)
    process.exit(1)
  }
}

export default connectDB