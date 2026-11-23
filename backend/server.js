
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Welcome route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Hexaware Starter Project Backend!"
    });
});

// Health check route
app.get("/api/health", (req, res) => {
    res.json({
        status: "success",
        message: "Backend is running successfully!"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
