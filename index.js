import OpenAI from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const openai = new OpenAI();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json(
    "Image Generator Node.js Backend. Use README.md for instructions on how to install/run."
  );
});

app.post("/generate", async (req, res) => {
  const { image_description, size, style, model } = req.body;
  const generate = await openai.images.generate({
    model: model,
    prompt: image_description,
    size: size,
    quality: "standard",
    n: 1,
    style: style,
  });
  res.json({ image_url: generate.data[0].url });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
