import mongoose from "mongoose";

 const dogSchema = new mongoose.Schema({
name:String,
age:Number,
color:String,
});

 const Dog = mongoose.model("Dog",dogSchema);
 export default Dog