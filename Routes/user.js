
const express = require("express");
const { register, login, deleteUser, resetPassword } = require("../Controllers/user");
const isAuth = require("../Middleware/isAuth");
const isAdmin = require("../Middleware/isAdmin");
const { registerValidations, validator } = require("../Middleware/Validator");

const router = express.Router();

router.post("/register", registerValidations(), validator, register);
router.post("/login", login);
router.delete("/delete/:_id", isAuth, isAdmin, deleteUser); // Protège la suppression d'un utilisateur pour les admins
router.put("/resetPassword/:_id", resetPassword);
router.post("/current", isAuth, (req, res) => {
    res.status(200).send(req.user);
});

module.exports = router;
