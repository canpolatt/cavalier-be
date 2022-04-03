import MessageBox from "../models/MessageBox.js";

//CREATE NEW MESSAGE

const newMessage = async (req,res)=>{
    const message = new MessageBox(req.body);
    try{
        const savedMessage = await message.save();
        res.status(200).json(savedMessage);
    }catch(err){
        res.status(500).json(err);
    }
}

//GET ALL MESSAGES

const getAllMessages = async (req,res)=>{
    try{
        const messages = await MessageBox.find();
        res.status(200).json(messages);
    }catch(err){
        res.status(500).json(err);
    }
}

export {newMessage, getAllMessages};
