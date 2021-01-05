import initDB from "../../helpers/initDb";
import UserIn from "../../models/UserIn";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

initDB();
export default async (req, res) => {
  const { email, pass } = req.body;

  try {
    if (!email || !pass) {
      return res.status(422).json({ error: "Pls add all the fields" });
    }
    const user = await UserIn.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const match = await bcrypt.compare(pass, user.password);
    if (match) {
      const token = jwt.sign({ userid: user._id }, "fxfgcgvhgvh", {
        expiresIn: "7d",
      });
      const { name, role, email } = user;
      res.status(201).json({ token: token, user: { name, role, email } });
    } else {
      return res.status(401).json({ error: "emial pr password dont match" });
    }
  } catch (err) {
    console.log(err);
  }
};
