import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

//Declare the port for the app
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.ATLAS_URI);

//Declare the Express app
const app = express();
app.use(express.json());

import grades from "./routes/grades.js";

app.get("/", (req, res) => {
  res.send("Welcome to the API.");
});

app.use("/grades", grades);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});