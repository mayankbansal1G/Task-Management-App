import React from 'react';

const PrioritySelector = ({taskPriority, setTaskPriority}) => {

    return (
        <select
            id="status"
            value={taskPriority} // Bind the value to the state
            onChange={({target}) => setTaskPriority(Number(target.value))} // Handle the change event
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
        </select>
    );
};

export default PrioritySelector;