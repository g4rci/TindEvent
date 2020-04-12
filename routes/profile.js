var express = require("express");
var router = express.Router();
const isLoggedIn = require("../helpers/middlewares").isLoggedIn;
const bcrypt = require("bcrypt");
const User = require("../models/user");
const saltRounds = 10;

// chequea si el usuario está logueado usando la función helper (chequea si existe la sesión)
    router.get("/", isLoggedIn(), (req, res, next) => {
        // si está logueado, previene que el password sea enviado y devuelve un json con los datos del usuario (disponibles en req.session.currentUser)
        req.session.currentUser.password = "*";
        res.json(req.session.currentUser);
    });


    router.post("/:id/edit", async (req, res, next) => {
    try {
      const { username, email, password, location, bio } = req.body;
      const picture = req.body.picture ? req.body.picture : req.session.currentUser.picture;
      const {id} = req.params;
      // const salt = bcrypt.genSaltSync(saltRounds);
      // const hashPass = bcrypt.hashSync(password, salt);
      await User.findByIdAndUpdate({_id: id},
        { $set: { username, email, /*password: hashPass,*/location, bio, picture } })
      res
        .status(200) //  OK
        .json();
    } catch (err) {
      console.log(err);
    }
  });


  router.post("/:id/delete", async (req, res, next) => {
    try {
      await User.findByIdAndRemove(req.params.id);
      res
        .status(200) //  OK
        .json();
    } catch (err) {
      console.log(err);
    }
  });


  module.exports = router;