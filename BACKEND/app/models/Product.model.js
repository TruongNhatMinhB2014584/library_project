const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    productName: { type: String, maxLength: 255 },
    productDes: { type: String },
    categoryId: { type: String },
    quantity: { type: Number },
    trademark: { type: String },
    origin: { type: String },
    productImg: [{ type: String, maxLength: 255 }],
    Available: { type: Boolean, default: false },
  },
  { collection: "products" }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
