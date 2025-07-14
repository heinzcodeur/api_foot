const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const configPath = path.join(__dirname, "config.json");

app.post("/api/update-config", (req, res) => {
  fs.writeFile(configPath, JSON.stringify(req.body, null, 2), "utf8", (err) => {
    if (err) return res.status(500).send("Erreur d'écriture");
    res.send("Config mise à jour !");
  });
});

app.get("/config.json", (req, res) => {
  res.sendFile(configPath);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Backend démarré sur http://localhost:${PORT}`);
});