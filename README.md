📌 Overview
Handicapp is a CMS + Frontend project for managing events, companions (caregivers), users, and accessibility needs.

It demonstrates:

A fully configured Strapi v5 backend with roles, permissions, and content types

A React frontend with the 3 required views/pages:

✅ Companion creation (account creation for handicapped person)
✅ Event List
✅ Event Details

🚀 Features
Strapi CMS v5 with:
Configured roles (Admin, Disabled Person, Companion, Event Organizer, Location Owner, Public, Authenticated)
Permissions matching the RR Matrix
Entry views with custom field labels, descriptions, validation rules, sizes, and order
List views with sensible columns and labels

React Frontend with:
Create Companion page 
Event List page 
Event Details page 

📂 Project Structure

Handyc_app/
  backend/   → Strapi v5 project
  frontend/  → React (Vite) project

🧭 How to Run the Project Locally

1️⃣ Clone the Repository

git clone [REPO_URL]
cd Handyc_app

2️⃣ Backend (Strapi v5)
Install dependencies:

cd backend
npm install
Start the Strapi server:
npm run develop

✅ Strapi will start on:

http://localhost:1337

⭐ Access the Strapi Admin Panel at:
http://localhost:1337/admin

3️⃣ Frontend (React)
Install dependencies:

bash
Copy
Edit
cd ../frontend
npm install
✅ Ensure you have a .env file in frontend/ with:ini
VITE_API_URL=http://localhost:1337

⭐ This tells React how to reach your Strapi backend.

Start the frontend server:

npm run dev
✅ React will start on:
http://localhost:5173
