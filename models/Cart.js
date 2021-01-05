import mongoose from "mongoose";
const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "UserIn" },
  products: [
    {
      quantity: { type: Number, default: 1 },
      prod: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
    },
  ],
});
export default mongoose.models.cart || mongoose.model("cart", cartSchema);
