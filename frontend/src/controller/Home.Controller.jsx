import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import TaskList from "../view/TaskList.jsx";
import FilterForm from "../view/FilterFrom.jsx";
import AddOrEditForm from "../../../frontend/src/view/components/form/AddOrDeleteForm.jsx";
import Toast from "../components/toast/Toast";
import Modal from "react-modal";
import SearchBar from "../components/searchbar/SearchBar";
import { fetchTasks, deleteTask, searchTasks} from "../model/Task.Model.jsx";

const Home = () => {
    const [allTasks, setAllTasks] = useState([]);
    const [isSearch, setIsSearch] = useState(false);
    const [filterStatus, setFilterStatus] = useState(0);
    const [filterPriority, setFilterPriority] = useState(0);
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
    const [searchQuery, setSearchQuery] = useState("");

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

    const handleStatusFilterChange = (event) => {
        setFilterStatus(Number(event.target.value));
    };

    const handlePriorityFilterChange = (event) => {
        setFilterPriority(Number(event.target.value));
    };

    const getAllTasks = async () => {
        try {
            const tasks = await fetchTasks(filterStatus, filterPriority);
            setAllTasks(tasks);
        } catch (error) {
            console.log("An unexpected error occurred. Please try again.");
        }
    };

    const handleDelete = async (task) => {
        try {
            await deleteTask(task._id);
            showToastMessage("Task Deleted Successfully", "delete");
            getAllTasks();
        } catch (error) {
            console.log("An unexpected error occurred. Please try again.");
        }
    };

    const onSearchTask = async (query) => {
        try {
            const tasks = await searchTasks(query);
            setIsSearch(true);
            setAllTasks(tasks);
        } catch (error) {
            console.log("An unexpected error occurred. Please try again.");
        }
    };

    const handleClearSearch = () => {
        setIsSearch(false);
        setSearchQuery("");
        getAllTasks();
    };

    const handleSearchChange = (target) => {
        setSearchQuery(target.value);
        console.log(target.value);
        if (target.value.trim() !== "") {
            onSearchTask(target.value.trim());
        } else {
            handleClearSearch();
        }
    };

    useEffect(() => {
        getAllTasks();
    }, [filterStatus, filterPriority]);

    return (
        <>
            <div className="w-full flex items-center justify-between px-20  flex-col">
                <div className="flex items-center w-full md:w-1/2 justify-center py-4">
                    <FilterForm
                        filterStatus={filterStatus}
                        filterPriority={filterPriority}
                        onStatusChange={handleStatusFilterChange}
                        onPriorityChange={handlePriorityFilterChange}
                    />
                </div>
                <SearchBar
                    value={searchQuery}
                    onChange={({target}) => handleSearchChange(target)}
                    onClearSearch={handleClearSearch}
                />
            </div>
            <div className="container mx-auto">
                {isSearch && <h3 className="text-lg font-medium mt-5">Search Results</h3>}
                <TaskList
                    tasks={allTasks}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </div>
            <button
                className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-hoverColor absolute right-10 bottom-10"
                onClick={() => setOpenAddEditModal({ isShown: true, type: "add", data: null })}
            >
                <MdAdd className="text-[32px] text-white"/>
            </button>
            <Modal
                isOpen={openAddEditModal.isShown}
                onRequestClose={() => {}}
                style={{ overlay: { backgroundColor: "rgba(0,0,0,0.2)" } }}
                contentLabel="Example Modal"
                className="max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll w-[90%] md:w-[50%] sm:w-[70%] xl:w-[40%]"
            >
                <AddOrEditForm
                    type={openAddEditModal.type}
                    taskData={openAddEditModal.data}
                    onClose={() => setOpenAddEditModal({ isShown: false, type: "add", data: null })}
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
