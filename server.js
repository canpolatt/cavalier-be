import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/authentication.js";
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js";
import orderRoute from "./routes/order.js";
import messageRoute from "./routes/messagebox.js";
// import swaggerUI from "swagger-ui-express";
// import swaggerDocument from "./swagger.json";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFromat: "JWT",
        }
      }
    },
    security:[
      {
        bearerAuth: [],
      },
    ],
    info: {
      version: "1.0.0",
      title: "Cavalier Mobilya API by yorusoft",
      description: "Cavalier Mobilya API Information",
      contact: {
        name: "yorusoft"
      },
      servers: ["http://localhost:5000"]
    }
  },
  // ['.routes/*.js']
  apis: ["./routes/*.js"]
};

const swaggerDocs = swaggerDocument(swaggerOptions);
const server = express();

server.use(express.json());
server.use(cors());
server.use("/swagger", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

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
server.use("/api/orders", orderRoute);
server.use("/api/messagebox", messageRoute);

let port = process.env.PORT;
if (process.env.PORT == null || process.env.PORT == "") {
  port = 5000;
}
server.listen(port, () => {
  console.log("Server is up 🚀");
});

