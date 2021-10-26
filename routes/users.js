const express = require("express");
const router = express.Router();

// Login page
router.get("/login", (req, res) => res.render("login"));

// Register page
router.get("/register", (req, res) => res.render("register"));

// Register Handle
router.post("/register", (req, res) => {
  //   console.log(req.body);
  const { name, email, password, password2 } = req.body;
});

module.exports = router;
