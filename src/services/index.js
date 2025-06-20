import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import emailRoutes from "../../api/routes/emailRoutes.js";
import geminiRoutes from "../../api/routes/geminiRoutes.js";

dotenv.config();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Plant Doctor API is running" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something broke!" });
});

//middleware
app.use(
  cors({
    // add another origin when needed e.g when hosting
    origin: [
      "http://localhost:5173",
      "https://plant-doctor-lp8d2vulo-my-team-577788da.vercel.app/",
    ],
    credentials: true,
  })
);
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true, limit: "5mb" }));

//Connecting to db shold also happen here

//Using Routes
app.use("/services", emailRoutes);
app.use("/services", geminiRoutes);

app.listen(port, () => {
  console.log(`Example App listening on port ${port}`);
});

export default app;
