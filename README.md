Salon - Glimmer 💇‍♀️
A modern salon appointment management system built with the MERN stack, Vite, and Tailwind CSS.

https://./frontend/public/logo.png

Features
Appointment Booking: Easy online booking system

Service Management: Comprehensive service catalog

Staff Management: Assign staff to specific services

Client Management: Client profiles and history

Real-time Updates: Live appointment status

Responsive Design: Mobile-first approach

Tech Stack
Frontend: React, Vite, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT

Prerequisites
Before running this project, make sure you have the following installed:

Node.js (v16 or higher)

MongoDB (v5 or higher)

npm or yarn

Installation & Setup
1. Clone the Repository
bash
git clone https://github.com/ShakyaGurusinghe/Salon-Glimmer.git
cd Salon-Glimmer
2. Install Dependencies
Backend Dependencies
bash
cd backend
npm i
Frontend Dependencies
bash
cd frontend
npm i
3. Environment Configuration
Create a .env file in the backend directory:

env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/salon-glimmer
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRE=30d
4. Run the Application
Start the Backend Server
bash
cd backend
npm run dev
Server will run on http://localhost:5000

Start the Frontend Development Server
bash
cd frontend
npm run dev
Client will run on http://localhost:5173

5. Build for Production
Build Frontend
bash
cd frontend
npm run build
Start Production Server
bash
cd backend
npm start
Project Structure
text
Salon-Glimmer/
├── frontend/              # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/               # Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── package.json
└── README.md
Available Scripts
Backend Scripts
npm run dev - Start development server with nodemon

npm start - Start production server

npm test - Run tests

Frontend Scripts
npm run dev - Start Vite development server

npm run build - Build for production

npm run preview - Preview production build

API Endpoints
POST /api/auth/register - User registration

POST /api/auth/login - User login

GET /api/appointments - Get all appointments

POST /api/appointments - Create new appointment

PUT /api/appointments/:id - Update appointment

DELETE /api/appointments/:id - Delete appointment

Quick Start
1. Run the backend
bash
cd backend
npm i
npm run dev
2. Run the frontend
bash
cd frontend
npm i
npm run dev
After running both commands, your application will be available at:

Frontend: http://localhost:5173

Backend API: http://localhost:5000

Contributing
Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

License
This project is licensed under the MIT License.

Support
For support, email your-email@example.com or create an issue in the repository.

