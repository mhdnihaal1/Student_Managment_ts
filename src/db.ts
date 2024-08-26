import mongoose from 'mongoose';

const connectDB = async () => {
  try {

    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/STUDENT_MANAGMENT');
    console.log(`MongoDB connected: ${conn.connection.host}`);
    console.log('MongoDB connected');
  } catch (error:any) {
    console.error(`Error: ${error instanceof Error ? error.message : `error${error.message}`}`);
    process.exit(1);
  }
};

export default connectDB;



