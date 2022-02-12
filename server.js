import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/user.js";

const server = express();

server.use(express.json());
server.use(cors());

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("Successfully connected to the database !"))
.catch((err) => {
    console.log(err);
});

server.use("",userRoute);

server.listen(process.env.PORT, ()=>{
    console.log("Server is up 🚀");
});

