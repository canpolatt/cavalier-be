import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String,required:false },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    brand: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
