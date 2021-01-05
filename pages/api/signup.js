import initDB from "../../helpers/initDb";
import UserIn from "../../models/UserIn";
import Cart from "../../models/Cart";
import bcrypt from "bcryptjs";
initDB();
export default async (req, res) => {
  const { name, email, pass } = req.body;
  console.log(name, email, pass);
  try {
    if (!name || !email || !pass) {
      return res.status(422).json({ error: "Pls add all the fields" });
    }
    const user = await UserIn.findOne({ email });
    if (user) {
      return res.status(422).json({ error: "User Already Exist" });
    }
    const hpass = await bcrypt.hash(pass, 12);
    const newUser = await new UserIn({
      name,
      email,
      password: hpass,
    }).save();
    await new Cart({
      user: newUser._id,
    }).save();

    console.log(newUser);
    res.status(201).json({ message: "signup success" });
  } catch (err) {
    console.log(err);
  }
};
