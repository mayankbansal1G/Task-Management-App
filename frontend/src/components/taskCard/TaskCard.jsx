import moment from "moment";
import React from "react";

const TaskCard = ({ title = 'Untitled', date, content = '', onEdit, onDelete }) => {
    return (
        <div className="border rounded p-4 bg-gray-800 text-white hover:shadow-xl transition-all ease-in-out dark:bg-gray-900 dark:border-gray-700">
            <div className="flex items-center justify-between">
                <div>
                    <h6 className="text-sm font-medium">{title}</h6>
                    <span className="text-xs text-gray-400">{date ? moment(date).format('Do MMM YYYY') : '-'}</span>
                </div>
                <div>
                    <button onClick={onEdit} className="mr-2">Edit</button>
                    <button onClick={onDelete}>Delete</button>
                </div>
            </div>

            <p className="text-xs text-gray-300 mt-2">
                {content.length > 60 ? `${content.slice(0, 60)}...` : content}
            </p>
        </div>
    );
};

export default TaskCard;
