import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from "./config/database.js";
import taskRouter from "./routes/task.route.js";
import userRoute from "./routes/user.route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/tasks", taskRouter);

app.use("/api/users", userRoute);

app.listen(5001,()=>{
    connectDB();
    console.log("Server started on port 5000...");
});