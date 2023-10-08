import mongoose from "mongoose";


// // Define the User Schema
// const userSchema = new mongoose.Schema({
//   username:String,
//   email:String,
//   password: String,
//   firstName: String,
//   lastName: String,
//   age: Number,
//   address: {
//     street: String,
//     city: String,
//     state: String,
//     zipcode: String,
//   },
//   interests: [String],
//   createdAt:Date,
//   isActive:Boolean,
// });

// Define the User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
  age: Number,
  address: {
    street: String,
    city: String,
    state: String,
    zipcode: String,
  },
  interests: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});




 const User = mongoose.model("User",userSchema);
 export default User