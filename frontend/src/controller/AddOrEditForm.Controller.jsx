import { createTask, updateTask} from "../model/Task.Model.jsx";

export const handleSubmit = async (type, taskData, formValues, showToastMessage, getAllTasks, onClose) => {
    const { title, content, taskStatus, taskPriority, dueDate } = formValues;

    if (!title) {
        throw new Error("Please enter the title");
    }

    if (!content || countWords(content) > 70) {
        throw new Error("Please enter a description with no more than 70 words");
    }

    if (!taskStatus) {
        throw new Error("Please enter the status");
    }

    if (!dueDate) {
        throw new Error("Please enter the due date");
    }

    if (!taskPriority) {
        throw new Error("Please select a level of Priority");
    }

    try {
        if (type === 'edit') {
            const { _id } = taskData;
            console.log("Before Update");
            await updateTask(_id, { title, content, taskStatus, taskPriority, dueDate });
            console.log("After Update");
            showToastMessage("Task Updated Successfully", 'update');
        } else {
            await createTask({ title, content, taskStatus, taskPriority, dueDate });
            showToastMessage("Task Added Successfully");
        }
        getAllTasks();
        onClose();
    } catch (error) {
        throw error;
    }
};

const countWords = (text) => text.length;
