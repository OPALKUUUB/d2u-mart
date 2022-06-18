const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
// Routes
const authRoutes = require("./routes/auth");
const yahooRoutes = require("./routes/yahoo");
const martRoutes = require("./routes/mart");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "client/build")));

// app.use("/api", async (req, res, next) => {
//   if (req.headers.authorization === undefined) {
//     res.status(400).json({
//       status: false,
//       message: "Your login session is expired,\nPlease Sign In Again!",
//       error: "jwt",
//     });
//   } else {
//     // console.log(req.headers.authorization);
//     let token = req.headers.authorization.split(" ")[1];
//     jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
//       if (error) {
//         res.status(400).json({
//           status: false,
//           message: "Your login session is expired,\nPlease Sign In Again!",
//           error: "jwt",
//         });
//       } else {
//         res.locals = { username: decoded.username };
//         next();
//       }
//     });
//   }
// });

app.use(authRoutes);
app.use(martRoutes);
app.use(yahooRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Listen on port " + 5000);
});
