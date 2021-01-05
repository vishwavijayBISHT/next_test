import User from "../../models/UserIn";
import jwt from "jsonwebtoken";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await fetchUsers(req, res);
      break;
    case "PUT":
      await ChangeRole(req, res);
      break;
  }
};

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
const fetchUsers = Authinicated(async (req, res) => {
  try {
    console.log("fetcehds");
    const users = await User.find({ _id: { $ne: req.userid } });

    console.log(users);
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
});

const ChangeRole = Authinicated(async (req, res) => {
  console.log("change roles");
  const { _id, role } = req.body;
  const newRole = role == "user" ? "admin" : "user";
  const users = await User.findOneAndUpdate(
    { _id },
    { role: newRole },
    { new: true }
  ).select("-password");
  res.status(200).json(users);
});
