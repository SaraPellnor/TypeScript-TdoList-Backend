import express from "express"
import cors from "cors"
import cookieSession from "cookie-session"
import {userRouter} from "./user/user.router"
import {todoRouter} from "./todo/todo.router"
import {listRouter} from "./list/list.router"
export const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieSession({
    name: 'session',
    secret: "L1$a",
  
    // Cookie Options
    // maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }))

app.use("/api/user", userRouter)
app.use("/api/todo", todoRouter)
app.use("/api/list", listRouter)


