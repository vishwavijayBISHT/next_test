import jwt from "jsonwebtoken";
import Cart from "../../models/Cart";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await fetchuser(req, res);
      break;
    case "PUT":
      await updateProducts(req, res);
      break;
    case "DELETE":
      await deleteProducts(req, res);
  }
};

function Authinicated(icomponenet) {
  return (req, res) => {
    const { authorization } = req.headers;

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

const fetchuser = Authinicated(async (req, res) => {
  const cart = await Cart.findOne({ user: req.userid }).populate(
    "products.prod"
  );
  console.log(cart.products.prod);
  return res.status(200).json(cart);
});
const updateProducts = Authinicated(async (req, res) => {
  try {
    const { quantity, productId } = req.body;

    const cart = await Cart.findOne({ user: req.userid });
    console.log(cart.products);

    const exixt = cart.products.some((pdoc) => productId == pdoc.prod);
    console.log(exixt);
    if (exixt) {
      const c = await Cart.findOneAndUpdate(
        { _id: cart._id, "products.prod": productId },
        { $inc: { "products.$.quantity": quantity } }
      );
    } else {
      const newp = { quantity, prod: productId };
      console.log("newp  " + newp.prod);
      const a = await Cart.findOneAndUpdate(
        {
          _id: cart._id,
        },
        { $push: { products: { quantity: newp.quantity, prod: newp.prod } } }
      );
      console.log(" xasxasxcas    " + a.products.prod);
    }

    return res.status(200).json({ message: "Product added to cart" });
  } catch (err) {
    return res.status(401).json({ error: "Cant add server error" });
  }
});
const deleteProducts = Authinicated(async (req, res) => {
  const { productid } = req.body;
  const cart = await Cart.findOneAndUpdate(
    {
      user: req.userid,
    },
    { $pull: { products: { prod: productid } } },
    { new: true }
  ).populate("products.prod");
  res.status(200).json(cart.products);
});
