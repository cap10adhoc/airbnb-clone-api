const express = require("express");
const router = express.Router();
const { hasDescription } = require("../validations/validators");
const uploadImage = require('../middlewares/multer')
const placeController = require("../controllers/placeController");


router.get("/", placeController.index);
router.get("/:id", placeController.show);
router.post("/:idcity_id/",hasDescription, placeController.store);

module.exports = router;
