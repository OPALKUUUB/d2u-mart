const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
// Routes
const authRoutes = require("./routes/auth");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", (req, res) => {
  res.send("test");
});

app.use(authRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Listen on port");
});
