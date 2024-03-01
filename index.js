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
  res.json("Hello world!");
});
app.get("/test-image-generation", async (req, res) => {
  const completion = await openai.images.generate({
    model: "dall-e-3",
    prompt: "elephant",
    size: "1024x1024",
    quality: "standard",
    n: 1,
  });
  res.json({ image_url: completion.data[0].url });
});

app.get("/generate/:image_description", async (req, res) => {
  const generate = await openai.images.generate({
    model: "dall-e-3",
    prompt: req.params.image_description,
    size: "1024x1024",
    quality: "standard",
    n: 1,
  });
  res.json({ image_url: generate.data[0].url });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
