var express = require('express');
var router = express.Router();
const isLoggedIn = require("../helpers/middlewares").isLoggedIn
const Group = require('../models/group');
const User = require('../models/user');
//const uploadCloud = require('../config/cloudinary')

router.use((req, res, next) => isLoggedIn(req, res, next));

router.post("/groups", async (req, res, next) => {
    const { name } = req.body
    const creator = req.session.currentUser._id
    const newGroup = await Group.create({ name, creator })

    await User.updateOne({ _id: creator }, { $push: {groups : newGroup._id } })


})

module.exports = router;