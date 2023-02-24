import { Schema, model, models } from "mongoose"

const userSchema = new Schema({
    username: { type: String, require: true },
    password: { type: String, require: true }
}, { versionKey: false })

export const UserModel = models.user || model("user", userSchema)


