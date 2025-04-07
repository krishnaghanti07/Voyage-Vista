# 🌍 Voyage Vista

![Render](https://img.shields.io/badge/Hosted%20on-Render-3f3f3f?logo=render&logoColor=white)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Framework-Express.js-black?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-4ea94b?logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/Templating-EJS-cc0000?logo=ejs&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-38bdf8?logo=tailwindcss&logoColor=white)

Welcome to **Voyage Vista** — a full-stack travel destination listing web application inspired by platforms like Airbnb! Users can explore, list, and review travel stays based on categories like mountains, deserts, farms, and more.

🔗 **Live Website**: [https://voyage-vista-mx98.onrender.com](https://voyage-vista-mx98.onrender.com)

---

## 👨‍💻 Developed By
**Srikrishna Ghanti**

---

## ✨ Features

- 🧭 Browse curated travel listings by category (mountains, deserts, farms, etc.)
- ➕ Add your own travel listings with images, location, and price
- 🔍 Filter listings based on categories
- 📝 Leave reviews and ratings for listings
- 🔐 User authentication with sessions (register/login/logout)
- 📸 Upload and manage listing images
- 🌐 Hosted on [Render](https://render.com)

---

## 🛠 Tech Stack

- **Frontend**: HTML, CSS, Tailwind CSS, JavaScript, EJS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: Passport.js (Local strategy)
- **Templating Engine**: EJS
- **Deployment**: Render

---

## 📁 Project Structure


Voyage-Vista/
├── models/             # Mongoose schemas for Listings, Reviews, Users
├── routes/             # Express route handlers
├── views/              # EJS view templates
│   ├── listings/
│   ├── reviews/
│   └── partials/
├── public/             # Static assets (CSS, JS, images)
├── middleware/         # Custom middleware (authentication, validation)
├── app.js              # Main server file
├── .env                # Environment variables (not tracked)
└── README.md           # You're reading it now 🙂


---

## 📷 Screenshots (optional)

You can add screenshots here once you capture them. Use this format:

```markdown
![Home Page](link-to-image)
![Listing Page](link-to-image)
```

---

## 📝 How to Run Locally


git clone https://github.com/krishnaghanti07/Voyage-Vista.git
cd Voyage-Vista
npm install
npm start


Make sure to set up your `.env` file:


DB_URL=<your_mongodb_uri>
SECRET=<your_session_secret>


---

## 💡 Future Enhancements

- Integrate map-based search (Google Maps or Mapbox)
- Add advanced filters (price range, distance)
- Image gallery with preview slider
- Admin dashboard for listing moderation

---

## 📬 Contact

If you'd like to connect or have feedback:

📧 Email: [srikrishnaghanti07@gmail.com](mailto:srikrishnaghanti07@gmail.com)  
🔗 GitHub: [krishnaghanti07](https://github.com/krishnaghanti07)

---

> 🚀 “Adventure is out there. Let Voyage Vista be your guide.”  
