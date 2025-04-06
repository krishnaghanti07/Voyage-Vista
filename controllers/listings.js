const Listing = require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
  const { category } = req.query; // Extract category from query params
  let filter = {}; // Default: No filter applied

  if (category) {
      filter.category = category; // Apply filter only if category is selected
  }

  // console.log(filter);
  let allListings = await Listing.find(filter); // Fetch listings based on filter

  // If no listings are found, fetch all listings instead
  if (allListings.length === 0) {
      allListings = await Listing.find({});
  }

  res.render("listings/index.ejs", { allListings });

  // let allListings = await Listing.find({});
  // res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  // console.log(req.user);
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist..!");
    res.redirect("/listings");
  }
  // console.log(listing);
  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  // console.log(response.body.features[0].geometry);
  // res.send("Done..!!");
  // console.log(req.body);

  let url = req.file.path;
  let filename = req.file.filename;
  // console.log(url, "...", filename);
  // let { title, description, image, price, country, location } = req.body ;
  // let listing = req.body.listing ;
  const newListing = new Listing(req.body.listing);
  // console.log(req.user);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  newListing.geometry = response.body.features[0].geometry;

  let savedListing = await newListing.save();
  // console.log(savedListing);
  // console.log(listing);
  req.flash("success", "New Listing Created..!");
  res.redirect("/listings");  

};

module.exports.updateListing = async (req, res) => {
  //   if (!req.body.listing) {
  //     throw new ExpressError(400 , "Send valid data for listing..!");
  //   }
  let { id } = req.params;
  // let listing = await Listing.findById(id);
  // if (!listing.owner._id.equals(res.locals.currUser._id)) {
  //   req.flash("error" , "You don't have permission to edit..!");
  //   return res.redirect(`/listings/${id}`)
  // }
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing Updated..!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  // console.log(deletedListing);
  req.flash("success", "Listing Deleted..!");
  res.redirect("/listings");
};
