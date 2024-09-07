import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo DB Connected: ${conn} and connection host ${conn.connection.host}`);
    } catch (error) {
        console.log("Connection Error Database")
        console.log(error.message);
        process.exit(1);
    }
};