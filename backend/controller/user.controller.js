import mongoose from "mongoose";
import User from "../model/user.model.js";

export const signUp = async (req, res) => {
    const user = req.body;
    if(!user.name) {
        return res.status(400).send({success: false, message: 'Please enter name'});
    }
    if (!user.email) {
        return res.status(400).send({success: false, message: 'Please enter email'});
    }
    if (!user.password) {
        return res.status(400).send({success: false, message: 'Please enter password'});
    }
    let oldUser=[];
    try {
        oldUser = await User.findOne({email:user.email});
        console.log(`old User : ${oldUser} ${typeof(oldUser)}`);
        if (oldUser!=null) {
            console.log(oldUser);

            return res.status(400).json({success: false, message: "User already exist"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({success: false, message: "Internal Server Error Whiles searching"});
    }
    try {
        const newUser = new User(user);
        await newUser.save();
        return res.status(200).json({success: true, data: newUser});
    } catch (error) {
        console.log(error);
        console.log("Error while creating user");
        return res.status(500).json({success: false, message: "Internal Server Error"});
    }
};


export const login = async (req, res) => {
    const {email, password} = req.body;
    if (!email) {
        return res.status(400).send({success: false, message: 'Please enter Email'});
    }
    if(!password) {
        return res.status(400).send({success: false, message: 'Please enter password'});
    }

    try {
        const user = await User.findOne({email:email});

        if (!user) {
            return res.status(400).send({success: false, message: 'No User Exits with the given email'});
        }

        if (user.password===password  && user.email===password) {
            return res.status(200).send({success: false, message: 'Login Successful', data: user});
        } else {
            return res.status(400).send({success: true, message: 'Invalid Credentials'});
        }
    } catch (error) {
        return res.status(500).send({success: false, message: 'Internal Server Error'});
    }
};