import initDB from "../../../helpers/initDb";
import Product from "../../../models/Product";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await GetProduct(req, res);
      break;
    case "DELETE":
      await deleteProduct(req, res);
      break;
  }
};
const GetProduct = async (req, res) => {
  const { pid } = req.query;

  const p = await Product.findOne({ _id: pid });

  res.status(200).json(p);
};

const deleteProduct = async (req, res) => {
  const { pid } = req.query;

  await Product.findByIdAndDelete({ _id: pid });

  res.status(200).json({ message: "ok" });
};
