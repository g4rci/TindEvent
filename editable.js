const express = require('express');
const router = express.Router();
const User = require('../models/user');
const uploadCloud = require('../config/cloudinary.js');


router.use((req, res, next) => {
    if (req.session.currentUser) {
      next();
      return;
    }
  
    res.redirect('/auth/login');
  });

  router.get('/profile', (req, res, next) => {
    User.findOne({_id: req.session.currentUser._id})
      .then((user) => {
        
        res.render('profile/profile', { user })
      })
      .catch((err) => next(err))
    });

    router.get('/edit', (req, res, next) => {
        User.findOne({_id: req.query.user_id})
        .then((user) => {
          res.render("profile/profile-edit", {user});
        })
        .catch((error) => {
          console.log(error);
        })
      });

      router.post('/edit', uploadCloud.single('photoUser'), (req, res, next) => {
        let actuallyUser;
        User.findOne({_id: req.session.currentUser._id})
        .then((user) => {
          actuallyUser = user;
          const {username, email, phoneNumber } = req.body;
          const photo_user = req.file ? req.file.secure_url : actuallyUser.photo_user;
          User.findOneAndUpdate({_id: req.query.user_id},{$set: {username, email, phoneNumber, photo_user}},{new:true})
            .then(() =>
            res.redirect('/profile/profile'))
            .catch((err) => next(err));
        })
        .catch((error) => {
          console.log(error);
        }) 
      });

  module.exports = router;