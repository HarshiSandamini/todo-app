import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    // userOwner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "users",
    //     required: true,
    // },
})

export const ToDoModel = mongoose.model("ToDo", todoSchema);