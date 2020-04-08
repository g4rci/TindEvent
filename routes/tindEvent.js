const express = require('express');
const router = express.Router();

const User = require('../../models/user');
const Group = require('../../models/group');

router.use((req, res, next) => {
    if (!req.session.currentUser) {
      next();
      return;
    }
  
    res.redirect('/login');
  });
