const express = require("express");
const app = express();
const morgan = require("morgan");
const userRoutes = require("./routes/users");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});