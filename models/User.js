import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: { type: String, default: "USER" },
    address: [{ 
      title:{
        type: String,
        required:true
      },
      phoneNumber:{
        type: String,
        required:true
      },
      country:{
        type: String,
        required:true
      },
      city:{
        type:String,
        required:true
      },
      fullAdress:{
        type:String,
        required:true
      }
    }], 
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
