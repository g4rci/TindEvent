var express = require("express");
var router = express.Router();
const isLoggedIn = require("../helpers/middlewares").isLoggedIn;
const Group = require("../models/group");
const User = require("../models/user");
//const uploadCloud = require('../config/cloudinary')

//router.use((req, res, next) => isLoggedIn(req, res, next));

router.post("/create", async (req, res, next) => {
  try {
    const { name, users, pending, eventID, bio } = req.body;
    const creator = req.session.currentUser._id;
    const newGroup = await Group.create({ name, users, pending, eventID, bio, creator });
    await User.findByIdAndUpdate( creator , { $push: { groups: newGroup._id } }, { new : true });
    const updaterGroup = await Group.findByIdAndUpdate( newGroup._id , { $push: { users: creator } }, { new : true });
    res
      .status(200) //  OK
      .json(updaterGroup)
  } catch (err) {
    console.log(err);
  }
});

router.post("/:id/join", async (req, res, next) => {
  const { id }  = req.params;
  try {
    const userToJoin = req.session.currentUser._id
    const groupToCheck = await Group.findById(id)
    if (groupToCheck.pending.includes(userToJoin)) {
      res
      .status(400) //  OK
      .json({Mensaje: "Ya existe"})
    } else {
    const updateGroup = await Group.findByIdAndUpdate( id , { $push: { pending: req.session.currentUser._id } }, { new : true });
    res
      .status(200) //  OK
      .json(updateGroup)
  }
  
  } catch (err) {
    console.log(err);
  }
});

router.post("/:id/:idUser/accept", async (req, res, next) => {
  const { id, idUser }  = req.params;
  try {
    await Group.findByIdAndUpdate( id , { $push: { users: idUser }}, { new : true });
    await Group.findByIdAndUpdate( id , { $pull: { pending: idUser}}, { new : true });
    const acceptUserToJoin = await User.findByIdAndUpdate( idUser , { $push: { groups: id}}, { new : true });
    res
      .status(200) //  OK
      .json(acceptUserToJoin)
  } catch (err) {
    console.log(err);
  }
});

router.post("/:id/delete", async (req, res, next) => {
  try {
    await User.updateMany({groups: req.params.id}, { $pull: { groups: req.params.id}}, { new : true });
    await Group.findByIdAndRemove(req.params.id);
    res
      .status(200) //  OK
      .json();
  } catch (err) {
    console.log(err);
  }
});


router.post("/:id/edit", async (req, res, next) => {
  try {
    const { name } = req.body;
    const {id} = req.params;
    console.log("de req body", req.body)
    console.log("console id", req.params)
    await Group.findByIdAndUpdate({_id: id},
      { $set: { name } })
    res
      .status(200) //  OK
      .json();
  } catch (err) {
    console.log(err);
  }
});

// router.post('/:id/edit', async(req, res, next) => {
//   try {
//   const { name } = req.body;
//   const { id } = req.params;
//   await Group.update({ _id: id },
//     { $set: { name } })
//     res
//           .status(200) //  OK
//           .json();
//       } catch (err) {
//         console.log(err);
//       }
// });

module.exports = router;
