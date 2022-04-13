import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        color: {
          type: String,
        },
        size: {
          type: String,
        },
        image: { type: String },
        title: { type: String },
        description: { type: String },
        price: { type: String },
      },
    ],
    totalPrice: { type: Number, required: true },
    status: { type: String, default: "pending" },
    address: { type: Object, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
