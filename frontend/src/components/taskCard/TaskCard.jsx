import moment from "moment";
import React from "react";
import { MdOutlinePushPin } from "react-icons/md";
import { MdCreate, MdDelete } from "react-icons/md";

const TaskCard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) => {
    return (
        <div className="border rounded p-4 bg-gray-800 text-white hover:shadow-xl transition-all ease-in-out dark:bg-gray-900 dark:border-gray-700">
            <div className="flex items-center justify-between">
                <div>
                    <h6 className="text-sm font-medium">{title}</h6>
                    <span className="text-xs text-gray-400">{date ? moment(date).format('Do MMM YYYY') : '-'}</span>
                </div>

                <MdOutlinePushPin
                    className={`icon-btn ${isPinned ? 'text-yellow-400' : 'text-gray-500'} dark:text-gray-400`}
                    onClick={onPinNote}
                />
            </div>

            <p className="text-xs text-gray-300 mt-2">
                {content?.slice(0, 60)}
            </p>

            <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                    {tags.map((item) => `#${item} `)}
                </div>

                <div className="flex items-center gap-2">
                    <MdCreate className="icon-btn hover:text-green-400 dark:hover:text-green-300" onClick={onEdit} />
                    <MdDelete className="icon-btn hover:text-red-500 dark:hover:text-red-400" onClick={onDelete} />
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
