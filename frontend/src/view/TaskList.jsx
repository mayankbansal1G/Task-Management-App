import React from "react";
import TaskCard from "../components/taskCard/TaskCard.jsx";
import EmptyCard from "../components/taskCard/EmptyCard.jsx";

const TaskList = ({ tasks, onEdit, onDelete }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-8 px-4 sm:px-6 lg:px-8">
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
            <div className="col-span-full"><EmptyCard/></div>
        )}
    </div>
);

export default TaskList;
