// //   let mapToken = "<%= process.env.MAP_TOKEN %>";

// //   let mapToken = mapToken ;
// //   console.log(mapToken);

// mapboxgl.accessToken = mapToken;

// const map = new mapboxgl.Map({
//   container: "map", // container ID
//   style: "mapbox://styles/mapbox/streets-v12",
//   center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
//   zoom: 9, // starting zoom
// });

// // Create a default Marker and add it to the map.
// const marker = new mapboxgl.Marker({ color: "red" })
//   .setLngLat(listing.geometry.coordinates) // Listing.geometry.coordinates
//   .setPopup(
//       new mapboxgl.Popup({ offset: 25 }).setHTML(
//         `<h4>${listing.title}</h4> <h6>${listing.location}</h6> <p>Exact Location will be provided after booking</p>`
//       )
//     )
//   .addTo(map);

// // console.log(coordinates);


// Access token from environment variable (embedded from EJS)
// mapboxgl.accessToken = "<%= process.env.MAP_TOKEN %>";
mapboxgl.accessToken = mapToken;

// Initialize the map
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // map style
  center: listing.geometry.coordinates, // [lng, lat]
  zoom: 9,
});

// Add default red marker with popup
const marker = new mapboxgl.Marker({ color: "#fe424d" }) // Use your theme red
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.title}</h4> 
       <h6>${listing.location}</h6> 
       <p>Exact location will be provided after booking</p>`
    )
  )
  .addTo(map);

// Add zoom and rotation controls to the map
map.addControl(new mapboxgl.NavigationControl(), "top-right");

// Optional: Add fullscreen control (if you want)
map.addControl(new mapboxgl.FullscreenControl(), "top-right");

// Optional: Improve appearance with a custom container size and rounded border (Add this CSS if not already in your styles)
