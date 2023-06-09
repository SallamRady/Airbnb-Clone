const router = require("express").Router();
const placeController = require("../controllers/place.controller");

router.post("/upload-image-via-url", placeController.uploadPhotoByLink);

router.post("/upload-images", placeController.uploadImages);

router.post("/createPlace", placeController.createPlace);

router.get("/userplacs", placeController.userPlaces);

module.exports = router;
