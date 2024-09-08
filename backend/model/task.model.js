import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        taskStatus:{
            type: String,
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
        user_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        timestamps: true,
    }
);
const Task = mongoose.model('Task', taskSchema);
//It will be converted to tasks
export default Task;