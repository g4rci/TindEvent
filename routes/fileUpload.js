const express = require("express");
const router = express.Router();
const uploadCloud = require("../config/cloudinary");

router.post("/upload", uploadCloud.single("picture"), (req, res, next) => {
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  res.json({ secure_url: req.file.secure_url });
});
module.exports = router;