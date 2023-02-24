import { app } from "./app"
import mongoose from "mongoose"

async function serverConnect() {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect("mongodb://127.0.0.1:27017/todo")
        mongoose.connection.on("Connection Error", () => { console.log("Connection Error") })

        app.listen(3000, () => { console.log("Lyssnar på port 3000...") })
        
    } catch (error) {
        console.log(error);
        
    }

}

serverConnect()

