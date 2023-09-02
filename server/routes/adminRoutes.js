const express = require("express");
const verifyToken = require('../utils/verifyToken');
const { authUser, registerUser, addVehicle, getAllVehicles } = require("../controller/adminController");
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
      cb(null, "../server/assets/images");
    },
    filename: function (req, file, cb) {
      const imageName = Date.now() + '-' + file.originalname;
      cb(null, imageName);
    }
  });
  
  const upload = multer({ storage: storage });

router.post('/login', authUser)
router.post('/register', registerUser)
router.post('/getVehicles', getAllVehicles)
router.post('/addVehicle', verifyToken, upload.array('recfile', 4), addVehicle)

module.exports = router;
