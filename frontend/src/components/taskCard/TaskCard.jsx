import React from 'react';
import { MdCreate, MdDelete } from 'react-icons/md';

// Arrays for priority and status values
const priorityArr = ["Low", "Medium", "High"];
const statusArr = ["To Do", "In Progress", "Completed"];

const TaskCard = ({
                      title,
                      content,
                      dueDate,
                      taskStatus,
                      taskPriority,
                      onEdit,
                      onDelete
                  }) => {
    // Determine priority and status values
    const priorityValue = priorityArr[taskPriority - 1];
    const statusValueStr = statusArr[taskStatus - 1];

    // Get today's date for comparison
    const today = new Date().setHours(0, 0, 0, 0);
    const dueDateObject = new Date(dueDate).setHours(0, 0, 0, 0);

    // Determine text color based on due date
    const dueDateTextColor = dueDate
        ? dueDateObject < today
            ? 'text-red-500' // Past due date
            : dueDateObject === today
                ? 'text-yellow-500' // Due today
                : 'text-slate-500' // Future due date
        : 'text-slate-500'; // No due date

    return (
        <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
            <div className="flex items-center justify-between">
                <div>
                    <h6 className="text-l font-medium">{title}</h6>
                </div>
            </div>

            <p className="text-sx text-slate-600 ">
                {content?.slice(0, 120)}
            </p>

            {/* Display the due date with conditional text color */}
            <div className="mt-2">
                <span className={`text-xs ${dueDateTextColor}`}>
                    Due Date: {dueDate ? new Date(dueDate).toLocaleDateString() : 'No due date'}
                </span>
            </div>

            {/* Display priority */}
            <div className="mt-1">
                <span className="text-xs text-slate-500">
                    Priority: {priorityValue || 'Low'}
                </span>
            </div>

            {/* Display status */}
            <div className="mt-0">
                <span className="text-xs text-slate-500">
                    Status: {statusValueStr || 'To Do'}
                </span>
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                    <MdCreate className="icon-btn hover:text-green-600" onClick={onEdit} />
                    <MdDelete className="icon-btn hover:text-red-500" onClick={onDelete} />
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
