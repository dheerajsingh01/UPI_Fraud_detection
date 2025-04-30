import mongoose from 'mongoose';

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    console.error('MongoDB URI not found in environment variables.');
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(mongoURI, {
      dbName: process.env.DB_NAME || undefined, // optional if not in URI
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

export default connectDB;
