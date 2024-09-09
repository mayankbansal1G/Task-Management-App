import express from "express";
import {login, signUp} from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.post('/signUp', signUp);

userRouter.post('/login', login);

export default userRouter;
