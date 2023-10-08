import mongoose from "mongoose";

 const dogSchema = new mongoose.Schema({
name:String,
age:Number,
color:String,
});
export function addDog (dog){
    var jsonObject = JSON.parse(dog);
    Dog.create({
name:jsonObject.name,
age:jsonObject.age,
color:jsonObject.color,
    })
};

 const Dog = mongoose.model("Dog",dogSchema);
 export default Dog