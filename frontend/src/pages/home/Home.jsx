import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import TaskCard from "../../components/taskCard/TaskCard.jsx";
import AddOrEditForm from "../../components/form/AddOrEditForm.jsx";
import Toast from "../../components/toast/Toast.jsx";
import Modal from "react-modal"
import SearchBar from "../../components/searchbar/SearchBar.jsx";

const Home = () => {
    const [allTasks, setAllTasks] = useState([]);
    const [isSearch, setIsSearch] = useState(false);
    const [filterStatus, setFilterStatus] = useState(0);
    const [openAddEditModal, setOpenAddEditModal] = useState({
        isShown: false,
        type: "add",
        data: null,
    });
    const [showToastMsg, setShowToastMsg] = useState({
        isShown: false,
        message: "",
        type: "add",
    });

    const handleEdit = (taskDetails) => {
        setOpenAddEditModal({ isShown: true, data: taskDetails, type: "edit" });
    };

    const showToastMessage = (message, type) => {
        setShowToastMsg({
            isShown: true,
            message: message,
            type,
        });
    };

    const handleCloseToast = () => {
        setShowToastMsg({
            isShown: false,
            message: "",
        });
    };

    const handleFilterChange = (event) => {
        setFilterStatus(Number(event.target.value));
        // getAllTasks();
    };

    // Get all tasks
    const getAllTasks = async () => {
        try {
            const response = await fetch("/api/tasks/all");
            console.log(response);
            if (!response.ok) {
                const error = await response.text();
                console.log(error);
                throw new Error("Error in response status " + error.message);
            }
            const data = await response.json();
            console.log(data.data);

            if (data && data.data) {
                console.log(`Filter Status ${filterStatus}`)
                if (filterStatus == 0) {
                    console.log("Value is 0");
                    setAllTasks(data.data);
                } else {
                    console.log(`Status Value is ${filterStatus}`);
                    let filteredTasks = [];
                    data.data.map((task) => {
                        if (task.taskStatus==filterStatus){
                            filteredTasks.push(task);
                        }
                    });
                    filteredTasks.forEach(task => console.log(task));
                    setAllTasks(filteredTasks);
                }
            }
        } catch (error) {
            console.log("An unexpected error occurred. Please try again after some time.");
        }
    };

    // Delete task
    const deleteTask = async (data) => {
        const taskId = data._id;
        try {
            const response = await fetch("/api/tasks/" + taskId, {
                method: "DELETE",
            });
            const result = await response.json();

            if (result && !result.error) {
                showToastMessage("Task Deleted Successfully", "delete");
                getAllTasks();
            }
        } catch (error) {
            console.log("An unexpected error occurred. Please try again.");
        }
    };

    // Search for a Task
    const onSearchTask = async (query) => {
        try {
            const response = await fetch("/api/tasks/byName/" + query);
            const data = await response.json();

            if (data && data.data) {
                setIsSearch(true);
                setAllTasks(data.data);
            }
        } catch (error) {
            console.log("An unexpected error occurred. Please try again.");
        }
    };

    const handleClearSearch = () => {
        setIsSearch(false);
        setSearchQuery("");
        getAllTasks();
    };

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (target) => {
        setSearchQuery(target.value);
        if(target.value.trim() !== "") {
            onSearchTask(target.value.trim());
        } else if (isSearch){
            handleClearSearch()
        }
    }

    useEffect(() => {
        getAllTasks();
    }, [filterStatus]);

    return (
        <>
            <div className="flex items-center justify-evenly w-full">
                <SearchBar
                    value={searchQuery}
                    onChange={({target}) => {
                        handleSearchChange(target)
                    }}
                    onClearSearch={handleClearSearch}
                />
                <form className="mx-auto flex items-center space-x-2">
                    <label className="text-l" >Status</label>
                    <select
                        id="status"
                        value={filterStatus} // Bind the value to the state
                        onChange={handleFilterChange} // Handle the change event
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                        <option value="0">All</option>
                        <option value="1">To Do</option>
                        <option value="2">In Progress</option>
                        <option value="3">Done</option>
                    </select>
                </form>
            </div>
            <div className="container mx-auto">
                {isSearch && (
                    <h3 className="text-lg font-medium mt-5">Search Results</h3>
                )}

                {allTasks.length > 0 ? (
                    <div className="grid grid-cols-3 gap-4 mt-8">
                        {allTasks.map((task) => {
                            return (
                                <TaskCard
                                    title={task.title}
                                    content={task.content}
                                    dueDate={task.dueDate}
                                    taskStatus={task.taskStatus}
                                    taskPriority={task.taskPriority}
                                    onEdit={() => handleEdit(task)}
                                    onDelete={() => deleteTask(task)}
                                    key={task._id}
                                />
                            );
                        })}
                    </div>
                ) : (
                    "Empty Tasks List"
                )}
            </div>

            <button
                className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
                onClick={() => {
                    setOpenAddEditModal({ isShown: true, type: "add", data: null });
                }}
            >
                <MdAdd className="text-[32px] text-white" />
                {/*<div className="flex items-center justify-center text-9xl" >Add</div>*/}
            </button>
            <Modal
                isOpen={openAddEditModal.isShown}
                onRequestClose={() => {}}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0,0,0,0.2)",
                    },
                }}
                contentLabel="Example Modal"
                className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
            >
                <AddOrEditForm
                    type={openAddEditModal.type}
                    taskData={openAddEditModal.data}
                    onClose={() => {
                        setOpenAddEditModal({ isShown: false, type: "add", data: null });
                    }}
                    showToastMessage={showToastMessage}
                    getAllTasks={getAllTasks}
                />
            </Modal>

            <Toast
                isShown={showToastMsg.isShown}
                message={showToastMsg.message}
                type={showToastMsg.type}
                onClose={handleCloseToast}
            />
        </>
    );
};

export default Home;
