import mongoose from "mongoose";
const url = 'mongodb://127.0.0.1:27017/mern'
mongoose.connect(url)
console.log("Connection estibleshed")