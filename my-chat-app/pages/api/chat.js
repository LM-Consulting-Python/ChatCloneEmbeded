import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "public", "chat.html");

    // Leitura do arquivo de forma assíncrona
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Erro ao ler o arquivo:", err);
        res.status(500).end();
        return;
      }

      res.setHeader("Content-Type", "text/html");
      res.status(200).send(data);
    });
  } catch (error) {
    console.error("Erro ao lidar com a requisição:", error);
    res.status(500).end();
  }
}
