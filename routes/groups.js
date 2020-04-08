var express = require('express');
var router = express.Router();
const isLoggedIn = require("../helpers/middlewares").isLoggedIn
const Group = require('../models/group');
const User = require('../models/user');
//const uploadCloud = require('../config/cloudinary')

//router.use((req, res, next) => isLoggedIn(req, res, next));

router.post("/create", async (req, res, next) => {
    try {
    const { name } = req.body
    const creator = req.session.currentUser._id
    const newGroup = await Group.create({ name, creator })
    console.log(newGroup);

    await User.updateOne({ _id: creator }, { $push: {groups : newGroup._id } })
    res
    .status(200) //  OK
    .json(newGroup);
    }
    catch(err) { console.log(err)};
})

router.post('/:id/delete', async (req, res, next) => {
    try {
    await Group.findByIdAndRemove(req.params.id)
    res
    .status(200) //  OK
    .json();
    }
    catch(err) { console.log(err)};
  });

module.exports = router;