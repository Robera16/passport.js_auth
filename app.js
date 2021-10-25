const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const app = express();

// Ejs
app.use(expressLayouts);
app.set("view engine", "ejs");

// Routes
app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server listening on port ${PORT}`));
