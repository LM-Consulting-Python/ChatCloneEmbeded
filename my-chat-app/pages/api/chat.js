import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "public", "chat.html");
  const fileContents = fs.readFileSync(filePath, "utf8");
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(fileContents);
}
