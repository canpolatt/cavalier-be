import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({

    userId:{type:String}, //kullanıcı sisteme kayıtlı ise kaydedilebilir.
    name:{type:String},
    surname:{type:String},
    phoneNumber:{type:String},
    email:{type:String},
    message:{type:String,maxLength:255}

},{timestamps:true});

export default mongoose.model("Message",MessageSchema);