import Order from "../models/Order.js";
import jwt from "jsonwebtoken";


//CREATE NEW ORDER

const newOrder = async (req,res)=>{
    const authHeader = req.headers.authorization
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.AUTH_KEY, (err, user) => {
          err && res.status(403).json("Geçersiz token !");
          req.body.userId = user.id;
        });
    }
    const order = new Order(req.body);
    try{
        const savedOrder = await order.save();
        res.status(200).json(savedOrder);
    }catch(err){
        res.status(500).json(err);
    }

}

//UPDATE ORDER

const updateOrder = async (req,res)=>{
    try{
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
            $set: req.body,
            },
            {new: true}
        );
        
        res.status(200).json(updatedOrder);
    } catch(err)
    {
        res.status(500).json(err);
    }
}

// DELETE ORDER

const cancelOrder = async (req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been cancelled !");
    }catch(err){
        res.status(500).json(err);
    }
};

//GET USER ORDERS

const findOrder = async (req,res)=>{
    try{
        const orders = await Order.find({userId: req.user.id});
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json(err);
    }
    console.log(req);
};

//GET ALL ORDERS

const allOrders = async (req,res)=>{
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json(err);
    }
};

export {newOrder, updateOrder, cancelOrder, findOrder, allOrders};