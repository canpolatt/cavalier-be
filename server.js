import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/authentication.js";
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js";

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

server.use("", authRoute);
server.use("/api/users", userRoute);
server.use("/api/products", productRoute);
server.use("",productRoute);

let port = process.env.PORT;
if (process.env.PORT == null || process.env.PORT == "") {
  port = 5000;
}
server.listen(port, () => {
  console.log("Server is up 🚀");
});

