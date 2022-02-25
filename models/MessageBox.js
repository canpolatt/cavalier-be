import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({

    userId:{type:String}, //kullanıcı sisteme kayıtlı ise kaydedilebilir.
    name:{type:String,required:true},
    surname:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true,maxLength:255}

},{timestamps:true});

export default mongoose.model("Message",MessageSchema);