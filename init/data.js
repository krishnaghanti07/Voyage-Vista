const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259],
    },
    category: "beachfront",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128],
    },
    category: "skyline-view",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1911],
    },
    category: "mountains",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696],
    },
    category: "historical",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-122.6784, 45.5152],
    },
    category: "treehouse",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: {
      type: "Point",
      coordinates: [-86.8515, 21.1619],
    },
    category: "beachfront",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-120.0324, 39.0968],
    },
    category: "forest",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.2437, 34.0522],
    },
    category: "skyline-view",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.2268, 46.1006],
    },
    category: "mountains",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: {
      type: "Point",
      coordinates: [34.8333, -2.3333],
    },
    category: "safari",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: {
      type: "Point",
      coordinates: [4.9041, 52.3676],
    },
    category: "historical",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    geometry: {
      type: "Point",
      coordinates: [178.065, -17.7134],
    },
    category: "island",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [-1.8433, 51.833],
    },
    category: "historical",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-71.0589, 42.3601],
    },
    category: "historical",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.092, -8.3405],
    },
    category: "beachfront",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-115.5708, 51.1784],
    },
    category: "mountains",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-80.1918, 25.7617],
    },
    category: "historical",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    geometry: {
      type: "Point",
      coordinates: [98.3923, 7.8804],
    },
    category: "luxury",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [-4.71, 57.12],
    },
    category: "castles",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: {
      type: "Point",
      coordinates: [55.2962, 25.2769],
    },
    category: "desert",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-110.3626, 46.8797],
    },
    category: "forest",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    geometry: {
      type: "Point",
      coordinates: [25.3289, 37.4467],
    },
    category: "beachfront",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [-83.7534, 9.7489],
    },
    category: "eco-lodges",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-79.9311, 32.7765],
    },
    category: "historical",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.6503, 35.6762],
    },
    category: "skyline-view",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-71.5724, 43.1939],
    },
    category: "forest",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    geometry: {
      type: "Point",
      coordinates: [73.2207, 3.2028],
    },
    category: "luxury",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1911],
    },
    category: "mountains",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [-84.7534, 9.7489],
    },
    category: "beachfront",
  },
  {
    title: "Floating Glass House in Swedish Archipelago",
    description:
      "Experience Nordic minimalism in this architect-designed floating home surrounded by Baltic Sea islands. Perfect for digital detox.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmxvYXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Stockholm Archipelago",
    country: "Sweden",
    geometry: {
      type: "Point",
      coordinates: [18.6435, 59.3251],
    },
    category: "floating-house",
  },
  {
    title: "Ancient Temple Stay in Kyoto",
    description:
      "Participate in Zen Buddhist practices at this 14th-century temple. Includes meditation sessions and shojin ryori vegetarian cuisine.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlbXBsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 120,
    location: "Kyoto",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [135.7681, 35.0116],
    },
    category: "temple-stays",
  },
  {
    title: "Solar-Powered Ice Hotel",
    description:
      "Sleep in artist-carved ice suites at this eco-friendly hotel rebuilt annually with glacial water. Includes thermal sleeping bags and sauna access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 450,
    location: "Jukkasjärvi",
    country: "Sweden",
    geometry: {
      type: "Point",
      coordinates: [20.6413, 67.8545],
    },
    category: "ice-hotel",
  },
  {
    title: "Cliffside Cave Hotel",
    description:
      "Carved into volcanic rock, these climate-controlled cave suites offer panoramic Mediterranean views and private plunge pools.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1610500796385-3ffc1ae2f906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F2ZSUyMGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Cappadocia",
    country: "Turkey",
    geometry: {
      type: "Point",
      coordinates: [34.8588, 38.6432],
    },
    category: "cave-hotel",
  },
  {
    title: "Volcano-View Bamboo Eco Lodge",
    description:
      "Sustainable bamboo villas with direct views of active lava flows. Includes guided volcanic landscape hikes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dm9sY2Fub3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 890,
    location: "Puna District",
    country: "Hawaii, USA",
    geometry: {
      type: "Point",
      coordinates: [-155.083, 19.4194],
    },
    category: "volcano-view",
  },
  {
    title: "Haunted Victorian Mansion",
    description:
      "Paranormal enthusiasts welcome! Stay in this documented haunted 1889 mansion with original furnishings. Night vision cameras included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1576091160558-5a0abfc78f9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhdW50ZWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 85,
    location: "Transylvania",
    country: "Romania",
    geometry: {
      type: "Point",
      coordinates: [24.9731, 46.2183],
    },
    category: "haunted-houses",
  },
  {
    title: "Futuristic Space Pod Hostel",
    description:
      "Experience Mars colony living in these soundproofed space pod beds with VR windows and anti-gravity simulation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1531053326607-9d349096d887?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1dHVyaXN0aWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 65,
    location: "Oslo",
    country: "Norway",
    geometry: {
      type: "Point",
      coordinates: [10.7522, 59.9139],
    },
    category: "futuristic",
  },
  {
    title: "Underwater Marine Observatory",
    description:
      "Sleep surrounded by tropical fish in this submerged suite with 360° acrylic walls. Includes scuba gear and marine biologist-led tours.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571997478779-1ad6736bedca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5kZXJ3YXRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Maldives",
    country: "Maldives",
    geometry: {
      type: "Point",
      coordinates: [73.5123, 4.1755],
    },
    category: "underwater",
  },
  {
    title: "Mongolian Yurt Camp",
    description:
      "Authentic nomadic experience with horseback riding and eagle hunting demonstrations. Includes traditional throat singing performances.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582564286939-1a5ba8aed874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHlvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 75,
    location: "Gobi Desert",
    country: "Mongolia",
    geometry: {
      type: "Point",
      coordinates: [104.2861, 43.6702],
    },
    category: "camping",
  },
  {
    title: "Converted Lighthouse Boathouse",
    description:
      "19th-century lighthouse with private boat dock and rotating lantern room. Perfect for maritime history enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvYXRob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Maine Coast",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-68.2039, 44.3922],
    },
    category: "boathouse",
  },
  {
    title: "Ayurvedic Wellness Ashram",
    description:
      "30-day panchakarma detox programs with daily yoga, meditation, and organic sattvic meals. Medical staff supervision included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1603989872380-0d1d1ac9c9bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlbGxuZXNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Kerala",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.2673, 10.8505],
    },
    category: "wellness",
  },
  {
    title: "Off-Grid Earthship Home",
    description:
      "Fully self-sufficient solar home built from recycled tires and bottles. Rainwater harvesting and food production systems included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9mZiUyMGdyaWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 95,
    location: "Taos",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-105.573, 36.4072],
    },
    category: "off-grid",
  },
  {
    title: "Jungle Canopy Zip-Line Lodge",
    description:
      "Treetop cabins accessible only by zip-line. Includes night jungle safaris and waterfall rappelling adventures.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGp1bmdsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 680,
    location: "Monteverde Cloud Forest",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [-84.7764, 10.3157],
    },
    category: "jungle-lodges",
  },
  {
    title: "Budget Artist Collective Hostel",
    description:
      "Creative dorm-style accommodation with mural painting workshops and nightly live music. Includes free breakfast buffet.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvc3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 28,
    location: "Berlin",
    country: "Germany",
    geometry: {
      type: "Point",
      coordinates: [13.4049, 52.52],
    },
    category: "budget-friendly",
  },
  {
    title: "Silent Monastery Cell",
    description:
      "Experience monastic life in this 15th-century mountain monastery. Guests participate in daily prayer services and maintain silence.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582201943021-e8e5cb6dedc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vbmFzdGVyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 45,
    location: "Bhutan Himalayas",
    country: "Bhutan",
    geometry: {
      type: "Point",
      coordinates: [89.6393, 27.4728],
    },
    category: "monasteries",
  },
  {
    title: "Viral Glass Cliff House",
    description:
      "Instagram-famous transparent cantilevered house over Norwegian fjord with 360° views. Featured in Architectural Digest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJlbmRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Geirangerfjord",
    country: "Norway",
    geometry: { type: "Point", coordinates: [7.206, 62.1015] },
    category: "trending",
  },

  // Luxury
  {
    title: "24K Gold-Plated Penthouse",
    description:
      "Ultra-luxurious Dubai penthouse with gold fixtures, private helipad, and champagne waterfall.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGx1eHVyeSUyMHBlbnRob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 25000,
    location: "Dubai Marina",
    country: "UAE",
    geometry: { type: "Point", coordinates: [55.1381, 25.0759] },
    category: "luxury",
  },

  // Treehouse
  {
    title: "Ancient Redwood Canopy Suite",
    description:
      "Sustainable treehouse complex built around 2000-year-old redwoods with suspension bridges.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590490359685-ffe156a53e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyZWVob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 890,
    location: "Redwood National Park",
    country: "USA",
    geometry: { type: "Point", coordinates: [-124.0, 41.2132] },
    category: "treehouse",
  },

  // Boathouse
  {
    title: "Historic Thames Houseboat",
    description:
      "Fully renovated 1930s paddle steamer moored in central London with rooftop terrace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129474311-0e0d1d06a8cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvYXRob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 650,
    location: "London",
    country: "UK",
    geometry: { type: "Point", coordinates: [-0.1276, 51.5072] },
    category: "boathouse",
  },

  // Mountains
  {
    title: "Alpine A-Frame Cabin",
    description:
      "Chalet-style cabin with direct ski-out access to Swiss Alpine slopes. Heated boot warmers included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132960623-9d2edd287f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdW50YWluJTIwY2FiaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1450,
    location: "Zermatt",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.7481, 46.0207] },
    category: "mountains",
  },

  // Forest
  {
    title: "Moss-Covered Forest Dome",
    description:
      "Geodesic glass dome hidden in ancient woodland with outdoor cedar hot tub.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 320,
    location: "Black Forest",
    country: "Germany",
    geometry: { type: "Point", coordinates: [8.1667, 48.1667] },
    category: "forest",
  },

  // Jungle Lodges
  {
    title: "Amazon Canopy Walk Lodge",
    description:
      "Network of elevated lodges connected by suspension bridges through primary rainforest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGp1bmdsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 780,
    location: "Manu National Park",
    country: "Peru",
    geometry: { type: "Point", coordinates: [-71.6897, -11.8545] },
    category: "jungle-lodges",
  },

  // Desert
  {
    title: "Mars Simulation Habitat",
    description:
      "Experience Martian living in this NASA-designed desert research station. Includes space suit rentals.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132960623-9d2edd287f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Atacama Desert",
    country: "Chile",
    geometry: { type: "Point", coordinates: [-69.2878, -23.8367] },
    category: "desert",
  },

  // Beachfront
  {
    title: "Overwater Polynesian Bungalow",
    description:
      "Traditional thatched villa on stilts above turquoise lagoon. Glass floor panels for marine viewing.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132960623-9d2edd287f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNocmVvbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2900,
    location: "Bora Bora",
    country: "French Polynesia",
    geometry: { type: "Point", coordinates: [-151.742, -16.5004] },
    category: "beachfront",
  },

  // Island
  {
    title: "Private Atoll Resort",
    description:
      "Entire coral atoll rental with staff of 20. Includes private airstrip and research submarine.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132960623-9d2edd287f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 75000,
    location: "Seychelles",
    country: "Seychelles",
    geometry: { type: "Point", coordinates: [55.5364, -4.6796] },
    category: "island",
  },

  // Historical
  {
    title: "Restored Roman Villa",
    description:
      "Live like a patrician in this meticulously restored 2nd-century villa with original mosaics.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132960623-9d2edd287f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhpc3RvcmljYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Pompeii",
    country: "Italy",
    geometry: { type: "Point", coordinates: [14.4848, 40.7462] },
    category: "historical",
  },

  // Temple Stays
  {
    title: "Shaolin Kung Fu Retreat",
    description:
      "Train with warrior monks at the birthplace of Zen Buddhism and Chinese martial arts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132960623-9d2edd287f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlbXBsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 120,
    location: "Dengfeng",
    country: "China",
    geometry: { type: "Point", coordinates: [113.028, 34.4586] },
    category: "temple-stays",
  },

  // Monasteries
  {
    title: "Himalayan Meditation Caves",
    description:
      "Ancient stone cells used by Buddhist monks for centuries. Includes guided Vipassana sessions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132960623-9d2edd287f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vbmFzdGVyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 55,
    location: "Ladakh",
    country: "India",
    geometry: { type: "Point", coordinates: [77.5806, 34.1526] },
    category: "monasteries",
  },

  // Castles
  {
    title: "Dracula's Fortress Rental",
    description:
      "Entire 14th-century Transylvanian castle. Includes dungeon tour and medieval banquet.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132960623-9d2edd287f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhc3RsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 8900,
    location: "Bran",
    country: "Romania",
    geometry: { type: "Point", coordinates: [25.3673, 45.5152] },
    category: "castles",
  },

  // Camping
  {
    title: "Arctic Tundra Glamping",
    description:
      "Heated geodesic domes under Northern Lights with dog sledding expeditions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132960623-9d2edd287f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 670,
    location: "Lapland",
    country: "Finland",
    geometry: { type: "Point", coordinates: [26.9341, 67.9222] },
    category: "camping",
  },

  // Safari
  {
    title: "Mobile Elephant Safari Camp",
    description:
      "Luxury tents that move with wildlife migration patterns. Professional trackers and biologists on staff.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132960623-9d2edd287f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNhZmFyaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Okavango Delta",
    country: "Botswana",
    geometry: { type: "Point", coordinates: [22.4594, -19.2804] },
    category: "safari",
  },

  // Haunted Houses
  {
    title: "Abandoned Asylum Stay",
    description:
      "Overnight in decommissioned psychiatric hospital with paranormal investigation equipment provided.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132960623-9d2edd287f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhdW50ZWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 199,
    location: "Pennsylvania",
    country: "USA",
    geometry: { type: "Point", coordinates: [-75.387, 40.0974] },
    category: "haunted-houses",
  },

  // Floating House
  {
    title: "Solar-Powered Floating Pods",
    description:
      "High-tech water homes in sustainable floating community. Includes underwater observation lounge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132960623-9d2edd287f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb2F0aW5nJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2300,
    location: "Maldives",
    country: "Maldives",
    geometry: { type: "Point", coordinates: [73.3288, 4.1755] },
    category: "floating-house",
  },

  // Futuristic
  {
    title: "Neural-Link Smart Apartment",
    description:
      "Control entire living space with brain-computer interface. Includes VR fitness studio and robo-chef.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132960623-9d2edd287f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1dHVyaXN0aWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Singapore",
    country: "Singapore",
    geometry: { type: "Point", coordinates: [103.8198, 1.3521] },
    category: "futuristic",
  },

  // Underwater
  {
    title: "Abyssal Research Station",
    description:
      "Live 200m below sea level in this scientific habitat with daily deep-sea exploration missions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132960623-9d2edd287f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVuZGVyd2F0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 12000,
    location: "Great Barrier Reef",
    country: "Australia",
    geometry: { type: "Point", coordinates: [146.8333, -18.2833] },
    category: "underwater",
  },

  // Budget-Friendly
  {
    title: "Converted Tram Car Hostel",
    description:
      "Retired city trams turned into cozy pods with shared kitchen facilities in urban garden setting.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132960623-9d2edd287f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1ZGdldCUyMGhvc3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 35,
    location: "Lisbon",
    country: "Portugal",
    geometry: { type: "Point", coordinates: [-9.1426, 38.7223] },
    category: "budget-friendly",
  },

  // Volcano View
  {
    title: "Lava Flow Observatory Suite",
    description:
      "Armored glass dome 500m from active volcano crater. Thermal imaging gear provided.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132960623-9d2edd287f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZvbGNhbm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Mount Etna",
    country: "Italy",
    geometry: { type: "Point", coordinates: [14.9955, 37.751] },
    category: "volcano-view",
  },

  // Skyline View
  {
    title: "Rotating Penthouse Suite",
    description:
      "360-degree rotating luxury apartment with automated cocktail bar and infinity edge sky pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132960623-9d2edd287f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNreWxpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 8500,
    location: "Shanghai",
    country: "China",
    geometry: { type: "Point", coordinates: [121.4737, 31.2304] },
    category: "skyline-view",
  },

  // Ice Hotel
  {
    title: "Arctic Ice Sculpture Suite",
    description:
      "Newly carved each winter from glacier ice. Includes reindeer fur bedding and aurora wake-up service.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132960623-9d2edd287f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGljZSUyMGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 890,
    location: "Kirkenes",
    country: "Norway",
    geometry: { type: "Point", coordinates: [30.0457, 69.7275] },
    category: "ice-hotel",
  },

  // Cave Hotel
  {
    title: "Underground Winery Cave",
    description:
      "12th-century wine storage caves converted into luxury suites. Private wine tasting sessions included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132960623-9d2edd287f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdmUlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2450,
    location: "Bordeaux",
    country: "France",
    geometry: { type: "Point", coordinates: [-0.5792, 44.8378] },
    category: "cave-hotel",
  },

  // Eco-Lodges
  {
    title: "Mycelium Mushroom Village",
    description:
      "Fully biodegradable structures grown from fungal mycelium. Carbon-negative operations.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132960623-9d2edd287f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVjb2xvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 560,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: { type: "Point", coordinates: [-84.1945, 9.7489] },
    category: "eco-lodges",
  },

  // Wellness
  {
    title: "Floatation Therapy Resort",
    description:
      "Sensory deprivation tanks, IV vitamin therapy, and personalized sound healing sessions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132960623-9d2edd287f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlbGxuZXNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Sedona",
    country: "USA",
    geometry: { type: "Point", coordinates: [-111.761, 34.8697] },
    category: "wellness",
  },

  // Off-Grid
  {
    title: "AI-Managed Survival Cabin",
    description:
      "Fully automated off-grid shelter with drone resupply system and EMP-proof electronics.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132960623-9d2edd287f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9mZiUyMGdyaWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 450,
    location: "Yukon Territory",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-135.0, 60.0] },
    category: "off-grid",
  },
];

module.exports = { data: sampleListings };
