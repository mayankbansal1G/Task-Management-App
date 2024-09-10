// import React, { useEffect, useState } from "react";
// import { MdAdd } from "react-icons/md";
// import TaskCard from "../../components/taskCard/TaskCard.jsx";
// import AddOrEditForm from "../../components/form/AddOrEditForm.js";
// import Toast from "../../components/toast/Toast.jsx";
//
// const Home = () => {
//     const [allTasks, setAllTasks] = useState([]);
//
//     const [isSearch, setIsSearch] = useState(false);
//
//     const [filterStatus, setFilterStatus] = useState(0);
//
//     const [openAddEditModal, setOpenAddEditModal] = useState({
//         isShown: false,
//         type: "add",
//         data: null,
//     });
//
//     const [showToastMsg, setShowToastMsg] = useState({
//         isShown: false,
//         message: "",
//         type: "add",
//     });
//
//     const handleEdit = (noteDetails) => {
//         setOpenAddEditModal({ isShown: true, data: noteDetails, type: "edit" });
//     };
//
//     const showToastMessage = (message, type) => {
//         setShowToastMsg({
//             isShown: true,
//             message: message,
//             type,
//         });
//     };
//
//     const handleCloseToast = () => {
//         setShowToastMsg({
//             isShown: false,
//             message: "",
//         });
//     };
//
//     const handleFilterChange = (event)=>{
//         setFilterStatus(event.target.value);
//         getAllTasks();
//     }
//
//     // Get all tasks
//     const getAllTasks = async () => {
//         try {
//             const response = await axiosInstance.get("/all");
//
//             if (response.data && response.data.tasks) {
//                 setAllTasks(response.data.tasks);
//                 if (filterStatus==0){
//                     console.log("Value is 0");
//                 } else {
//                     console.log(`Status Value is ${filterStatus}`)
//                     let filteredTasks =[];
//                     response.data.tasks.forEach(task=>{
//                         if (task.statusValue==filterStatus){
//                             filteredTasks.push(task);
//                         }
//                     });
//                     filteredTasks.forEach(task=>{
//                         console.log(task)});
//                     setAllTasks(filteredTasks);
//                 }
//
//             }
//         } catch (error) {
//             console.log("An unexpected error occurred. Please try again.");
//         }
//     };
//
//     // Delete task
//     const deleteTask = async (data) => {
//         const taskId = data._id;
//         try {
//             const response = await axiosInstance.delete("/" + taskId);
//
//             if (response.data && !response.data.error) {
//                 showToastMessage("Task Deleted Successfully", "delete");
//                 getAllTasks();
//             }
//         } catch (error) {
//             console.log("An unexpected error occurred. Please try again.");
//         }
//     };
//
//
//     // Search for a Task
//     const onSearchTask = async (query) => {
//         try {
//             const response = await axiosInstance.get("/search-notes"+query);
//
//             if (response.data && response.data.tasks) {
//                 setIsSearch(true);
//                 setAllTasks(response.data.tasks);
//             }
//         } catch (error) {
//             console.log("An unexpected error occurred. Please try again.");
//         }
//     };
//
//     const handleClearSearch = () => {
//         setIsSearch(false);
//         getAllTasks();
//     };
//
//     useEffect(() => {
//         getAllTasks();
//         return () => {};
//     }, [filterStatus]);
//
//     return (
//         <>
//             <form className="max-w-sm mx-auto">
//                 <select
//                     id="status"
//                     value={filterStatus} // Bind the value to the state
//                     onChange={handleFilterChange} // Handle the change event
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                 >
//                     <option value="0">All</option>
//                     <option value="1">To Do</option>
//                     <option value="2">In Progress</option>
//                     <option value="3">Done</option>
//                 </select>
//             </form>
//             <div className="container mx-auto">
//                 {isSearch && (
//                     <h3 className="text-lg font-medium mt-5">Search Results</h3>
//                 )}
//
//                 {allTasks.length > 0 ? (
//                     <div className="grid grid-cols-3 gap-4 mt-8">
//                         {allTasks.map((task) => {
//                             return (
//                                 <TaskCard
//                                     title={task.title}
//                                     content={task.content}
//                                     dueDate={task.dueDate}
//                                     statusValue={task.taskStatus}
//                                     priority={task.taskPriority}
//                                     onEdit={()=>{handleEdit(task)}}
//                                     onDelete={()=>{deleteTask(task)}}
//                                     key={index}/>
//                             );
//                         })}
//                     </div>
//                 ) : ("Empty Tasks List"
//                 )}
//             </div>
//
//             <button
//                 className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
//                 onClick={() => {
//                     setOpenAddEditModal({isShown: true, type: "add", data: null});
//                 }}
//             >
//                 <MdAdd className="text-[32px] text-white"/>
//             </button>
//             <Modal
//                 isOpen={openAddEditModal.isShown}
//                 onRequestClose={() => {
//                 }}
//                 style={{
//                     overlay: {
//                         backgroundColor: "rgba(0,0,0,0.2)",
//                     },
//                 }}
//                 contentLabel="Example Modal"
//                 className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
//             >
//                 <AddOrEditForm
//                     type={openAddEditModal.type}
//                     noteData={openAddEditModal.data}
//                     onClose={() => {
//                         setOpenAddEditModal({isShown: false, type: "add", data: null});
//                     }}
//                     showToastMessage={showToastMessage}
//                     getAllNotes={getAllNotes}
//                 />
//             </Modal>
//
//             <Toast
//                 isShown={showToastMsg.isShown}
//                 message={showToastMsg.message}
//                 type={showToastMsg.type}
//                 onClose={handleCloseToast}
//             />
//         </>
//     );
// };
//
// export default Home;




import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import TaskCard from "../../components/taskCard/TaskCard.jsx";
import AddOrEditForm from "../../components/form/AddOrEditForm.jsx";
import Toast from "../../components/toast/Toast.jsx";
import Modal from "react-modal"

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

    const handleEdit = (noteDetails) => {
        setOpenAddEditModal({ isShown: true, data: noteDetails, type: "edit" });
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
        setFilterStatus(event.target.value);
        getAllTasks();
    };
    // const getAllTasks = async () => {
    //     try {
    //         const response = await fetch('/all');
    //         // console.log(response);
    //         if (!response.ok) {
    //             // const errorText = await response.text();
    //             // throw new Error(`Network response was not ok: ${response.statusText} - ${errorText}`);
    //             console.log("Error in response status");
    //         }
    //         const data = await response.json();
    //         console.log("Hello", data);
    //         console.log(data.data);
    //         setAllTasks(data.data); // Assuming the response is an array of products
    //     } catch (error) {
    //         console.log("Error Occurred");
    //         console.error("There was a problem with the fetch operation: " + error + "  " + error.message);
    //     }
    // };
    // Get all tasks
    // const getAllTasks = async () => {
    //     try {
    //         const response = await fetch("/all");
    //         console.log(response);
    //         if (!response.ok) {
    //             const error = await response.text();
    //             console.log(error);
    //             throw new Error("Error in response status " + error.message);
    //         }
    //         const data = await response.json();
    //         console.log(data.data);
    //
    //         if (data && data.data) {
    //             setAllTasks(data.data);
    //             if (filterStatus === 0) {
    //                 console.log("Value is 0");
    //             } else {
    //                 console.log(`Status Value is ${filterStatus}`);
    //                 let filteredTasks = data.data.filter(task => task.statusValue == filterStatus);
    //                 filteredTasks.forEach(task => console.log(task));
    //                 setAllTasks(filteredTasks);
    //             }
    //         }
    //     } catch (error) {
    //         console.log("An unexpected error occurred. Please try again after some time.");
    //     }
    // };

    // Delete task
    const deleteTask = async (data) => {
        const taskId = data._id;
        try {
            const response = await fetch("/" + taskId, {
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
            const response = await fetch("/byName/" + query);
            const data = await response.json();

            if (data && data.tasks) {
                setIsSearch(true);
                setAllTasks(data.tasks);
            }
        } catch (error) {
            console.log("An unexpected error occurred. Please try again.");
        }
    };

    const handleClearSearch = () => {
        setIsSearch(false);
        getAllTasks();
    };

    useEffect(() => {
        getAllTasks();
    }, [filterStatus]);

    return (
        <>
            <form className="max-w-sm mx-auto">
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
            <div className="container mx-auto">
                {isSearch && (
                    <h3 className="text-lg font-medium mt-5">Search Results</h3>
                )}

                {allTasks.length > 0 ? (
                    <div className="grid grid-cols-3 gap-4 mt-8">
                        {allTasks.map((task, index) => {
                            return (
                                <TaskCard
                                    title={task.title}
                                    content={task.content}
                                    dueDate={task.dueDate}
                                    statusValue={task.taskStatus}
                                    priority={task.taskPriority}
                                    onEdit={() => handleEdit(task)}
                                    onDelete={() => deleteTask(task)}
                                    key={index}
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
                    noteData={openAddEditModal.data}
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
