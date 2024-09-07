import express from 'express';

import {
    addTask,
    deleteTask,
    getAllTask, getAllTasksByName,
    testApi,
    updateTask
} from "../controller/task.controller.js";
import Task from "../model/task.model.js";

const taskRouter = express.Router();

taskRouter.get("/test", testApi)

taskRouter.post("/", addTask);

taskRouter.get('/all', getAllTask);

taskRouter.put("/:taskId", updateTask);

taskRouter.delete("/:taskId", deleteTask);

taskRouter.get("/byName/:taskName", getAllTasksByName);

export default taskRouter;