const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const { isLoggedIn, isOwner, validateListing } = require("../middleware");

const listingController = require("../controllers/listings");
const multer  = require('multer');
const { storage } = require("../cloudConfig");
const upload = multer({ storage }); // multer will store the files in the cloudinary storage

router
  .route("/")  // Index Route
  .get(wrapAsync(listingController.index)) 
  .post(  // Create Route
    isLoggedIn,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.createListing)
  );
  // .post(upload.single('listing[image]'), (req , res) => {
  //   res.send(req.file);
  // });

// New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
  .route("/:id")  // Show Route
  .get(wrapAsync(listingController.showListing))
  .put(  // Update Route
    isLoggedIn,
    isOwner,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.updateListing)
  )  // Delete Route
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;
// Index Route
// router.get("/", wrapAsync(listingController.index));

// Show Route
// router.get("/:id", wrapAsync(listingController.showListing));

// Create Route
// router.post(
//   "/",
//   isLoggedIn,
//   validateListing,
//   wrapAsync(listingController.createListing)
// );


// Update Route
// router.put(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   validateListing,
//   wrapAsync(listingController.updateListing)
// );

// Delete Route
// router.delete(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   wrapAsync(listingController.destroyListing)
// );

