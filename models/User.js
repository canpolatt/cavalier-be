import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {type:String, required:true},
        surname: {type:String, required:true},
        email: {type:String, required:true,unique:true},
        password: {type:String, required:true},
        isAdmin: {type:String,default:"USER"},
        address: {type:String,required:false},   
},{timestamps:true});

export default mongoose.model("User",UserSchema);