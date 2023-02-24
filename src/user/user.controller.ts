import { Request, Response } from "express"
import { UserModel } from "./user.model"
import bcrypt from "bcrypt"



export async function registerUser(req: Request, res: Response) {
    try {

        const CheckUsername = await UserModel.findOne({ username: req.body.username })
        if (CheckUsername) {
            return res.status(400).json("Username already taken")
        }
        const hash = await bcrypt.hash(req.body.password, 10,)

        const user = {
            username: req.body.username,
            password: hash
        }

        const data = await UserModel.create(user)
        res.status(201).json(data)
    } catch (error) {
        console.error(error);

    }
}

export async function loginUser(req: Request, res: Response) {
    try {

        const data = await UserModel.findOne({ username: req.body.username })
        const match = bcrypt.compareSync(req.body.password, data.password);

        if (match) {
            if (req.session) {
                req.session = data
            }

            res.status(200).json(data)
        } else {
            res.status(404).json("wrong")
        }
    } catch (error) {
        console.error(error);
    }
}

export function logoutUser(req: Request, res: Response) {
    try {
        req.session = null
        res.status(200).json("Logged out!")
    } catch (error) {
        res.status(404).json(error)
    }



}