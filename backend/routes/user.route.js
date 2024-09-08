import express from "express";
import User from "../model/user.model.js"
import {login, signUp} from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.post('/signUp', signUp);

userRouter.post('/login', login);

export default userRouter;
