import OpenAI from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const openai = new OpenAI();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req, res) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Hello World" }],
    model: "gpt-3.5-turbo",
  });
  res.json({ completion: completion.choices[0] });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
