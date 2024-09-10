
import moment from "moment";
import { MdCreate, MdDelete } from "react-icons/md";

const priorityArr = ["Low", "Medium", "High"];
const statusArr = ["To Do","In Progress", "Completed"];
const TaskCard = ({
                      title,
                      content,
                      dueDate,
                      taskStatus,
                      taskPriority,
                      onEdit,
                      onDelete }) => {
    const priorityValue = priorityArr[taskPriority - 1];
    const statusValueStr = statusArr[taskStatus-1];
    console.log(title);
    return (
        <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
            <div className="flex items-center justify-between">
                <div>
                    <h6 className="text-sm font-medium">{title}</h6>
                </div>
            </div>

            <p className="text-xs text-slate-600 mt-2">
                {content?.slice(0, 60)}
            </p>

            {/*Display the due date */}
            <div className="mt-2">
                <span className="text-xs text-slate-500">
                    {/*Due Date: {dueDate ? moment(dueDate).format('Do MMM YYYY') : 'No due date'}*/}
                    Due Date: {dueDate}
                </span>
            </div>

            {/* Display priority */}
            <div className="mt-2">
                <span className="text-xs text-slate-500">
                    Priority: {priorityValue ? priorityValue : 'Low'}
                </span>
            </div>

            <div className="mt-2">
                <span className="text-xs text-slate-500">
                    Status: {taskStatus ? statusValueStr : 'To Do'}
                </span>
            </div>

            <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                    <MdCreate className="icon-btn hover:text-green-600" onClick={onEdit}/>
                    <MdDelete className="icon-btn hover:text-red-500" onClick={onDelete}/>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;

