import initDB from "../../helpers/initDb";
import Product from "../../models/Product";
initDB();
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getall(req, res);
      break;
    case "POST":
      await addprd(req, res);
      break;
  }
};
const getall = async (req, res) => {
  Product.find()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => {
      console.log(err);
    });
};
const addprd = async (req, res) => {
  const { name, price, des, media } = req.body;
  if (!name || !price || !des || !media) {
    return res.status(422).json({ error: "Please add all the fields" });
  }
  const product = await new Product({
    name: name,
    price: price,
    description: des,
    mediaUrl: media,
  }).save();
  res.status(201).json(product);
};
