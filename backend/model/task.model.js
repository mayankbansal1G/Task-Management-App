import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        content:{
            type: String,
            required: true
        },
        taskStatus:{
            type: Number,
            required: true
        },
        dueDate:{
            type: String,
            required: true
        },
        taskPriority:{
            type: Number,
            required: true
        },
    },
    {
        timestamps: true,
    }
);
const Task = mongoose.model('Task', taskSchema);
//It will be converted to tasks
export default Task;