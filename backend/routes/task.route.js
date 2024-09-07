import express from 'express';
import Task from "../model/task.model.js";
import mongoose from "mongoose";

const taskRouter = express.Router();

taskRouter.get("/test", (req, res)=> {
    return res.status(200).json({"status": "success"});
})
taskRouter.get('/all', async (req, res)=> {
    try {
        const tasks = await Task.find({});
        res.status(200).json({"status": "success",data: tasks});

    } catch (error) {
        console.log(error);
        res.status(500).json({"status": "error", message: `${error.message} and Cannot get all tasks`});
    }
    return res;
});

taskRouter.put("/:taskId", async (req, res)=> {
    const {taskId} = req.params;
    const task = req.body;
    if (!mongoose.Types.ObjectId.isValid(taskId)) {
        return res.status(400).json({"status": "error",message: `${taskId} is not a valid task`});
    }
    try {
        await Task.findByIdAndUpdate(taskId,task, {new:true});
        res.status(200).json({"status": "success",message: "Task updated successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({"status": "error", message: `${error.message} and Cannot update task`});
    }
    return res;
});

taskRouter.delete("/:taskId", async (req, res)=> {
    const {taskId} = req.params;
    // console.log(`Id: ${taskId}`);
    try {
        await Task.findByIdAndDelete(taskId);
        res.status(200).json({"status": "success", message: "Task deleted successfully."});
    } catch (error) {
        console.log(error);
        res.status(500).json({"status": "error"});
    }
    return res;
})

taskRouter.post("/",async (req,res)=>{
    // console.log(req);
    const task = req.body;
    if(!task.name || !task.description || !task.taskStatus || !task.taskPriority || !task.dueDate){
        // console.log(task);
        return res.status(400).json({success: false, message: "Please Provide All Fields"});
    }
    const newTask = new Task(req.body);

    try {
        await newTask.save();
        res.status(200).json({success: true, message: "Task Added"});
    } catch (err) {
        console.error("Error is creating Task")
        console.error(err);
        res.status(500).json({success: false, message: err.message});
    }
});

export default taskRouter;