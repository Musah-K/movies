import mongoose from "mongoose";


const connectDb = async()=>{
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('db connected');
    } catch (error) {
        console.error(error);
        process.exit(1)
        
    }
}

export default connectDb;