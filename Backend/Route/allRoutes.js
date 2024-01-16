const express = require("express");
const router = express.Router();
const User = require("../Models/Users");
const passport = require("passport");
const items = require("../Models/Items");

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};
router.get("/", async (req, res) => {
  res.send(items);
});

// Login Post
// router.post(
//   "/login",
//   passport.authenticate("local", {
//     failureRedirect: "/login",
//     failureFlash: "Invalid username or password.",
//   }),
//   (req, res) => {
//     req.flash("success", "Welcome Back !");
//     res.redirect("/");
//   }
// );
router.post("/login", (req, res) => {
  try {
    res.send({ message: "Login successful", data: req.body });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// SignUp Post
router.post("/register", async (req, res) => {
  try {
    let { name, username, email, password } = req.body;
    let newUser = await new User({
      name: name,
      email: email,
      username: username,
    });
    let registeredUser = await User.register(newUser, password);
    await registeredUser.save();
    req.flash("success", "User Registered Successfully");
    res.redirect("/");
  } catch (e) {
    req.flash("error", `${e.message} Please Login`);
    res.redirect("/register");
  }
});
// Logout
router.get("/logout", (req, res) => {
  req.logOut(() => {
    req.flash("success", "Logged out Successfully !");
    res.redirect("/");
  });
});

module.exports = router;
