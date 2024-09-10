import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import {connectDB} from "./config/database.js";
import taskRouter from "./routes/task.route.js";
import userRoute from "./routes/user.route.js";
// import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());

const __dirname = path.resolve();

app.use("/api/tasks", taskRouter);

app.use("/api/users", userRoute);

if (process.env.NODE_ENV !== 'development') {
    app.use(express.static(path.join(__dirname, '/frontend/dist')));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    )
}
// app.use(cors())

app.listen(5001,()=>{
    connectDB();
    console.log("Server started on port " + 5001);
});