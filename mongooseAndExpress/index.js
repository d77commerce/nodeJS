import express from 'express';
import mongoose from "mongoose";
import Dog from"./models/dog.js";
import {addDog } from"./models/dog.js";
import User from"./models/user.js";
import{dirname} from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser'
const __dirname = dirname(fileURLToPath(import.meta.url));


const CONNECTION_STR = "mongodb://127.0.0.1:27017/oniks";

async function connectDB(){ 
await mongoose.connect(CONNECTION_STR);
console.log(`Database is cannect oniks whit connectin string ${CONNECTION_STR}`);

const dog = await Dog.find();
const user = await User.find();

console.log(dog);
console.log(user);
}
connectDB();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res) =>{
console.log(req.body);
res.sendFile(__dirname + "/public/index.html");
});

app.listen(port,()=>{
    console.log(`Express started on port ${port}`);
    });