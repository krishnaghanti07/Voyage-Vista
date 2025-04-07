
# 🌍 Voyage Vista

![Render](https://img.shields.io/badge/Hosted%20on-Render-3f3f3f?logo=render&logoColor=white)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Framework-Express.js-black?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-4ea94b?logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/Templating-EJS-cc0000?logo=ejs&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-38bdf8?logo=tailwindcss&logoColor=white)

> ✨ **Voyage Vista** is a full-stack travel listing platform where users can explore, add, and review unique travel stays—just like a traveler's dream come true!

---

## 🔗 Live Website

🌐 [https://voyage-vista-mx98.onrender.com](https://voyage-vista-mx98.onrender.com)

---

## 👨‍💻 Developed By

**Srikrishna Ghanti**

---

## 🚀 Features

- **Explore Listings:** Browse curated travel listings by category (mountains, deserts, farms, etc.)
- **Add Listings:** Users can add their own listings with image uploads and details.
- **Search & Filter:** Easily filter listings based on travel type.
- **User Reviews:** Add and manage reviews with ratings.
- **User Authentication:** Secure sign-up/login/logout functionality.
- **Responsive Design:** Built with Tailwind CSS for a modern, responsive experience.
- **Cloud & Deployment:** Deployed on Render with a robust Node.js and MongoDB backend.

---

## 🛠️ Tech Stack

| Layer       | Technologies Used                      |
|-------------|----------------------------------------|
| **Frontend**    | HTML, CSS, Tailwind CSS, JavaScript, EJS |
| **Backend**     | Node.js, Express.js                   |
| **Database**    | MongoDB (Mongoose)                    |
| **Authentication** | Passport.js (Local Strategy)          |
| **Deployment**  | Render                                |

---

## 📁 Project Structure

Voyage-Vista/
├── models/             # Mongoose schemas for Listings, Reviews, and Users
├── routes/             # Express route handlers for various endpoints
├── views/              # EJS templates for UI rendering
│   ├── listings/       # Listing-related views
│   ├── reviews/        # Review-related views
│   └── partials/       # Reusable view components (header, footer, etc.)
├── public/             # Static assets (CSS, JS, images)
├── middleware/         # Custom middleware functions (authentication, error handling)
├── app.js              # Main server file
├── .env                # Environment variables (not tracked in Git)
└── README.md           # This file

---

## 📸 Screenshots

Below are some screenshots from **Voyage Vista**.  
Make sure to update the image paths if you place them in a folder like `/public/images/`.

### Home Page
![Home Page](./Screenshot%20(527).png)

### Listings Overview
![Listings Overview](./Screenshot%20(528).png)

### Listing Details
![Listing Details](./Screenshot%20(529).png)

### Add New Listing
![Add New Listing](./Screenshot%20(530).png)

### User Authentication
![User Authentication](./Screenshot%20(531).png)

### Reviews Section
![Reviews Section](./Screenshot%20(532).png)

### Error Handling / Alerts
![Error Handling](./Screenshot%20(533).png)

### Mobile Responsive View
![Mobile Responsive](./Screenshot%20(534).png)

### Final Look
![Final Look](./Screenshot%20(535).png)

---

## 🧑‍💻 Getting Started Locally

To clone and run this project on your local machine:

1. **Clone the repository:**

    git clone https://github.com/krishnaghanti07/Voyage-Vista.git
    cd Voyage-Vista
    ```

2. **Install dependencies:**

    npm install
    ```

3. **Set up your environment variables:**  
   Create a `.env` file in the root directory and add:

    DB_URL=<your-mongodb-uri>
    SECRET=<your-session-secret>
    CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
    CLOUDINARY_KEY=<your-cloudinary-key>
    CLOUDINARY_SECRET=<your-cloudinary-secret>
    ```

4. **Run the development server:**

    npm run dev
    ```

---

## 💡 Future Enhancements

- **Interactive Maps:** Integrate map services (e.g., Mapbox or Leaflet) to visually display listing locations.
- **Advanced Filters:** Enhance search functionality with more filtering options like price range, distance, and ratings.
- **Admin Dashboard:** Build an administrative panel for managing listings and reviews.
- **Progressive Web App:** Convert the application into a PWA for a better mobile experience.
- **Email Notifications:** Implement automated email notifications for user interactions.

---

## 📬 Contact

If you have any questions or feedback, feel free to reach out:

**Srikrishna Ghanti**  
📧 [srikrishnaghanti07@gmail.com](mailto:srikrishnaghanti07@gmail.com)  
🔗 [GitHub: krishnaghanti07](https://github.com/krishnaghanti07)

---

> 🧳 “Travel is the only thing you buy that makes you richer.” Let **Voyage Vista** be your gateway to unforgettable adventures!
```
