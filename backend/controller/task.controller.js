import Task from "../model/task.model.js";
import mongoose from "mongoose";

const symbolArray = ['']
export const getAllTask = async (req, res)=> {
    try {
        const tasks = await Task.find({});
        res.status(200).send({success: true, data: tasks, message: "All Tasks Found"});
        // res.status(200).json({success: true,message: "All tasks found ", data: tasks});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: `${error.message} and Cannot get all tasks`});
    }
    return res;
};

export const updateTask = async (req, res)=> {
    const {taskId} = req.params;
    const task = req.body;
    if (!mongoose.Types.ObjectId.isValid(taskId)) {
        return res.status(400).json({success: false,message: `${taskId} is not a valid task`});
    }
    try {
        await Task.findByIdAndUpdate(taskId,task, {new:true});
        res.status(200).json({success:true,message: "Task updated successfully",data: task});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: `${error.message} and Cannot update task`});
    }
    return res;
};

export const deleteTask = async (req, res)=> {
    const {taskId} = req.params;
    // console.log(`Id: ${taskId}`);
    try {
        await Task.findByIdAndDelete(taskId);
        res.status(200).json({success: true, message: "Task deleted successfully.", data:taskId});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false});
    }
    return res;
};

export const addTask = async (req,res)=>{
    const task = req.body;
    if(!task.title || !task.content || !task.taskStatus || !task.taskPriority || !task.dueDate){
        // console.log(task);
        return res.status(400).json({success: false, message: "Please Provide All Fields"});
    }
    const newTask = new Task(req.body);
    try {
        const tempTask= await Task.find({title: task.title});
        if (tempTask.length > 0) {
            return res.status(400).json({success: false,message: "Task Title With Same Title Exists"});
        }
    } catch (error) {
        return res.status(500).json({success: false, message:"Internal Server Error"});
    }
    try {
        await newTask.save();
        res.status(200).json({success: true, message: "Task Added",data:newTask});
    } catch (err) {
        console.error("Error is creating Task")
        console.error(err);
        res.status(500).json({success: false, message: err.message});
    }
};

export const testApi = (req, res)=> {
    return res.status(200).json({success: true});
};

export const getAllTasksByName = async (req,res)=>{
    const {taskName} = req.params;
    // console.log(taskName);
    const regexPattern = new RegExp(taskName.toString().split("+").join(" "), 'i'); // 'i' makes the search case-insensitive
    try {
        const allTasks = await Task.find(
            {
                title: {$regex: regexPattern}
            }
        );
        res.status(200).json({success: true, data: allTasks});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: error.message});
    }
    return res;
};