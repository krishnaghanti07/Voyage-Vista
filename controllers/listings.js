const Listing = require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
  const { category, q } = req.query;

  let filter = {};

  // Apply category filter if selected
  if (category) {
    filter.category = category;
  }

  // Apply search filter if query exists
  if (q) {
    // Add $or condition to filter object for search logic
    filter.$or = [
      { title: { $regex: q, $options: "i" } },
      { location: { $regex: q, $options: "i" } },
      { country: { $regex: q, $options: "i" } }
    ];
  }

  let allListings = await Listing.find(filter);

  // Optional fallback: If no results and a search query was used, return all
  // if (allListings.length === 0 && q) {
  //   allListings = await Listing.find({});
  // }

  res.render("listings/index.ejs", { allListings, q, category });
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

module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing you requested for does not exist..!");
    return res.redirect("/listings");
  }

  // Pass the image URL from the listing
  const originalImageUrl = listing.image?.url || "/path/to/default.jpg"; // fallback if no image

  res.render("listings/edit.ejs", { listing, originalImageUrl });
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
