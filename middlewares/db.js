import mongoose from 'mongoose'

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      createIndexes: true,
    })
    console.log('Database Connected')
  } catch (err) {
    console.log(err)
  }
}
export default connectDB
