import Stripe from "stripe";
import { v4 as uuidv4 } from "uuid";
import Cart from "../../models/Cart";
import jwt from "jsonwebtoken";
import Order from "../../models/Order";
const aa =
  "sk_test_51I5pIaKfgiJaPMqtUEMeVUk8S1mRPK651QVX84qJ7vnFG2LiSfxylX4R2sdbvo3qxbbLyhUU69hmm6dXN2wcPlKz00KhGUNHGH";
const stripe = Stripe(aa);
export default async (req, res) => {
  const { paymentinfo } = req.body;
  const { authorization } = req.headers;
  let a = authorization;
  const bb = a.replace("Bearer ", "");
  console.log("rtyuikl   " + bb);
  if (!authorization) {
    return res.status(401).json({ error: "you must logged in" });
  }
  try {
    const { userid } = jwt.verify(bb, "fxfgcgvhgvh");
    const cart = await Cart.findOne({ user: userid }).populate("products.prod");
    let price = 0;
    cart.products.forEach((item) => {
      price = price + item.quantity * item.prod.price;
    });
    const prevCustomer = await stripe.customers.list({
      email: paymentinfo.email,
    });
    const isExistingCustomer = prevCustomer.data.length > 0;
    let newCustomer;
    if (!isExistingCustomer) {
      newCustomer = await stripe.customers.create({
        email: paymentinfo.email,
        source: paymentinfo.id,
      });
    }

    await stripe.charges.create(
      {
        currency: "INR",
        amount: price * 100,
        receipt_email: paymentinfo.email,
        customer: isExistingCustomer ? prevCustomer.data[0].id : newCustomer.id,
        description: `you purchased a product | ${paymentinfo.email}`,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    await new Order({
      user: userid,
      email: paymentinfo.email,
      total: price,
      products: cart.products,
    }).save();
    await Cart.findOneAndUpdate({ _id: cart._id }, { $set: { products: [] } });
    res.status(200).json({ message: "paymet was succeful" });
  } catch (err) {
    console.log(err);
    res.status(200).json({ error: "error in paymet" });
  }
};
