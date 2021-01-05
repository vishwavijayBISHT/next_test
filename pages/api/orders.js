import initDb from "../../helpers/initDb";
import Order from "../../models/Order";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import initDB from "../../helpers/initDb";
initDB();
function Authinicated(icomponenet) {
  return (req, res) => {
    const { authorization } = req.headers;
    console.log(authorization);

    if (!authorization) {
      return res.status(401).json({ error: "you must be login" });
    }
    try {
      const { userid } = jwt.verify(authorization, "fxfgcgvhgvh");
      req.userid = userid;

      return icomponenet(req, res);
    } catch (err) {
      return res.status(401).json({ error: "you must be login" });
    }
  };
}
export default Authinicated(async (req, res) => {
  const orders = await Order.findOneAndUpdate({
    user: req.userid,
  }).populate("products.prod");

  //   const a = orders.products
  console.log("asdasdasdsd=>>>>>>" + orders);
  console.log("asdasdasdsd=>>>>>>" + orders.products);
  res.status(200).json(orders.products);
});
