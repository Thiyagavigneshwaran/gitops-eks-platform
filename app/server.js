const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "GitOps EKS Platform is running",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
  });
});

app.get("/api/info", (req, res) => {
  res.json({
    application: "GitOps Demo API",
    version: "1.0.0",
    environment: process.env.NODE_ENV || "development",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`GitOps Demo API running on port ${PORT}`);
});