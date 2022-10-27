// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { db, userModel } from "./db/db";



const handler = async (req, res) => {
  db();
  switch (req.method) {
    case "POST":
      try {
        const _user = new userModel({
          name: req.body.name,
          email: req.body.email,
        });

        const result = await _user.save();
        res.status(200).json({
          result,
        });
      } catch (error) {
        res.status(200).json({ error: "server error" });
      }

    case "GET":
      try {
        const result = await userModel.find({});
        res.status(200).json({
          result,
        });
      } catch (error) {
        res.status(200).json({ error: "server error" });
      }

    default:
      break;
  }
};

export default handler;
