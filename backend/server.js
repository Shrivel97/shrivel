const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const inventoryRoutes = require("./routes");
app.use("/api/inventory", inventoryRoutes);

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URL,{})
  .then(() => {
    app.listen(5000, () => console.log("Server running on http://localhost:5000"));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
