import mongoose from "mongoose";
import Dog from"./models/dog.js";
import User from"./models/user.js";

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