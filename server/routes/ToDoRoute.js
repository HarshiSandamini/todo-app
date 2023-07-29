import {ToDoModel} from '../models/ToDoModel.js'
import express from "express";

const router = express.Router();

router.get('/',async(req, res)=> {
    const toDo = await ToDoModel.find()
    res.send(toDo)
});

router.post('/save',async (req, res)=> {
    const {text} = req.body
    ToDoModel
    .create({text})
    .then((data)=>{
        console.log("Added Succesfully..");
        console.log(data);
        res.send(data);
    })
});

router.post('/update',async (req, res) => {
    const{_id, text} = req.body
    ToDoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=> res.send("Updated Succesfully..."))
    .catch((err)=> console.log(err))
});

router.post('/delete',async (req, res) => {
    const{_id} = req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=> res.send("Deleted Succesfully..."))
    .catch((err)=> console.log(err))
});



export {router as todoRouter};
