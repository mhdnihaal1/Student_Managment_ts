import mongoose from 'mongoose';

const connectDB = async () => {
  try {
 
    const conn = await mongoose.connect('mongodb+srv://nihalmuhaednihal_db_user:Sxfg0fjhMEUttewc@cluster0.9oc3j0l.mongodb.net/students-managment?retryWrites=true&w=majority');
    console.log(`MongoDB connected: ${conn.connection.host}`);
    console.log('MongoDB connected');
  } catch (error:any) {
    console.error(`Error: ${error instanceof Error ? error.message : `error${error.message}`}`);
    process.exit(1);
  }
};

export default connectDB;



