const express = require('express');
const router = express.Router();
const moment = require('moment')
const multer = require('multer');
const upload = multer({ dest: './public/uploads/' });
const uploadCloud = require('../../config/cloudinary.js');

const User = require('../../models/user');
const Class = require('../../models/class');

