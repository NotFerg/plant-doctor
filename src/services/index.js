import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import emailRoutes from "./routes/emailRoutes.js";

dotenv.config();
const app = express();
const port = 3000;

//middleware
app.use(
  cors({
    // add another origin when needed e.g when hosting
    origin: ["http://localhost:5173"],
  })
);
app.use(express.json());

//Connecting to db shold also happen here

//Using Routes
app.use("/services", emailRoutes);

app.listen(port, () => {
  console.log(`Example App listening on port ${port}`);
});
