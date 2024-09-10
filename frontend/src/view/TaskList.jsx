import React from "react";
import TaskCard from "../components/taskCard/TaskCard.jsx";

const TaskList = ({ tasks, onEdit, onDelete }) => (
    <div className="grid grid-cols-3 gap-4 mt-8">
        {tasks.length > 0 ? (
            tasks.map(task => (
                <TaskCard
                    key={task._id}
                    title={task.title}
                    content={task.content}
                    dueDate={task.dueDate}
                    taskStatus={task.taskStatus}
                    taskPriority={task.taskPriority}
                    onEdit={() => onEdit(task)}
                    onDelete={() => onDelete(task)}
                />
            ))
        ) : (
            "Empty Tasks List"
        )}
    </div>
);

export default TaskList;
