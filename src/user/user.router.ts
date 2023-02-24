import express from "express"
import {loginUser, registerUser, logoutUser} from "./user.controller"

export const userRouter = express.Router()

userRouter.post("/", registerUser)
userRouter.post("/login", loginUser)
userRouter.get("/logout", logoutUser)
