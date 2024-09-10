import React from "react";

const FilterForm = ({ filterStatus, filterPriority, onStatusChange, onPriorityChange }) => (
    <div className="flex justify-between items-center gap-10">
        <form className="mx-auto flex items-center space-x-2">
            <label className="text-l">Status</label>
            <select
                value={filterStatus}
                onChange={onStatusChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
                <option value="0">All</option>
                <option value="1">To Do</option>
                <option value="2">In Progress</option>
                <option value="3">Done</option>
            </select>
        </form>
        <form className="mx-auto flex items-center space-x-2">
            <label className="text-l">Priority</label>
            <select
                value={filterPriority}
                onChange={onPriorityChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
                <option value="0">All</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
            </select>
        </form>
    </div>
);

export default FilterForm;
