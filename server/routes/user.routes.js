import express from "express";
import User from "../model/user.model.js";

const router = express.Router();

router.post("/user/post", async (req, res, next) => {
  const { first_name, last_name } = req.body;
  let isUser = await User.findOne({ where: { first_name, last_name } });
  if (
    `${first_name} ${last_name}` ===
    `${isUser ? isUser.dataValues.first_name : ""} ${
      isUser ? isUser.dataValues.last_name : ""
    }`
  ) {
    return res.status(500).json("User already present");
  }

  const user = await User.create({ first_name, last_name });

  res.status(201).json(user);
});

export default router;
