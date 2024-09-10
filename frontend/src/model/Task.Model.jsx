export const fetchTasks = async (filterStatus, filterPriority) => {
    try {
        const response = await fetch("/api/tasks/all");
        if (!response.ok) {
            const error = await response.text();
            throw new Error("Error in response status " + error.message);
        }
        const data = await response.json();
        if (data && data.data) {
            let filteredTasks = data.data;

            if (filterStatus !== 0) {
                filteredTasks = filteredTasks.filter(task => task.taskStatus === filterStatus);
            }

            if (filterPriority !== 0) {
                filteredTasks = filteredTasks.filter(task => task.taskPriority === filterPriority);
            }

            return filteredTasks;
        }
    } catch (error) {
        console.log("An unexpected error occurred. Please try again after some time.");
        throw error;
    }
};

export const deleteTask = async (taskId) => {
    try {
        const response = await fetch(`/api/tasks/${taskId}`, { method: "DELETE" });
        const result = await response.json();
        if (result && !result.error) {
            return "Task Deleted Successfully";
        }
    } catch (error) {
        console.log("An unexpected error occurred. Please try again.");
        throw error;
    }
};

export const searchTasks = async (query) => {
    try {
        const response = await fetch(`/api/tasks/byName/${query}`);
        const data = await response.json();
        if (data && data.data) {
            return data.data;
        }
    } catch (error) {
        console.log("An unexpected error occurred. Please try again.");
        throw error;
    }
};

export const createTask = async (taskData) => {
    try {
        const response = await fetch("/api/tasks/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(taskData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "An unexpected error occurred.");
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const updateTask = async (taskId, taskData) => {
    try {
        const response = await fetch(`/api/tasks/${taskId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(taskData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "An unexpected error occurred.");
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};
