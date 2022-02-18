import User from "../models/User.js";
import CryptoJS from "crypto-js";

// UPDATE USER INFORMATION

const updateUser = async (req, res) => {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_KEY
      ).toString();
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  };


// DELETE USER  
const deleteUser = async (req,res)=>{
  try{
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Kullanıcı başarıyla silindi !");
  }catch(err){
      res.status(500).json(err);
  }
}  


// GET ALL USERS 

const getAllUsers = async (req,res)=>{
  const query = req.query.new;
  try{
    const users = query
    ? await User.find().sort({_id: -1}).limit(5)
    : await User.find();
    res.status(200).json(users);
  } catch(err){
    res.status(500).json(err);
  }

}

export { updateUser, deleteUser, getAllUsers};
