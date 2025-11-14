import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from '../app';
dotenv.config();
const dbURI = process.env.DB_URL || 'mongodb://localhost:27017/myapp';

export const startApp = async () => {
  try {
    await mongoose.connect(dbURI);
    const PORT = process.env.PORT || 3000;
    const server = app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    console.log('MongoDB connected successfully');

    // Graceful shutdown
    const gracefulShutdown = async () => {
      console.log('\n🔻 Shutting down gracefully...');
      await mongoose.connection.close();
      server.close(() => {
        console.log('🧩 Server closed. MongoDB disconnected.');
        process.exit(0);
      });
    };

    // Handle various shutdown signals
    process.on('SIGINT', gracefulShutdown); // Ctrl + C
    process.on('SIGTERM', gracefulShutdown); // kill command
    process.on('uncaughtException', gracefulShutdown);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
