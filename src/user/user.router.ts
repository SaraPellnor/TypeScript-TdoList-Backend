import express from "express"
import {loginUser, registerUser} from "./user.controller"

export const userRouter = express.Router()

userRouter.post("/", registerUser)
userRouter.post("/login", loginUser)