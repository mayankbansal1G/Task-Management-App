
const StatusSelector = ({taskStatus,setTaskStatus}) => {
    const handleChange = (event) => {
        setTaskStatus(event.target.value);
    };

    return (
        <select
            id="status"
                value={taskStatus} // Bind the value to the state
                onChange={handleChange} // Handle the change event
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
            <option value="1">To Do</option>
            <option value="2">In Progress</option>
            <option value="3">Done</option>
        </select>
    );
};

export default StatusSelector;
