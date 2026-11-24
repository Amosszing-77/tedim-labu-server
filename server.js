const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const songRoutes = require("./routes/songRoutes");
const releaseRoutes = require("./routes/releaseRoutes");

const app = express();

// Middleware
app.use(cors()); // Allows your frontend to connect
app.use(express.json());

// Routes
app.use("/api/songs", songRoutes);
app.use("/api/releases", releaseRoutes);

// Health check (just so you know it works)
app.get("/", (req, res) => res.send("API is running..."));

// Connect to DB and Start Server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
