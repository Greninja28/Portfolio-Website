import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose.connect(process.env.MONGO_URI)
    .then(
      console.log('Database Connected Successfully!!!')
    ).catch((e) => {
      console.log(e);
    })
}