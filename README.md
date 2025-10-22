# Salon - Glimmer 💇‍♀️

A modern salon appointment management system built with the **MERN stack**, **Vite**, and **Tailwind CSS**.

![Salon Logo]()

## ✨ Features

* **Appointment Booking**: Easy online booking system for clients.
* **Service Management**: Comprehensive catalog to manage all salon services.
* **Staff Management**: Assign staff members to specific services and view their schedules.
* **Client Management**: Detailed client profiles and appointment history.
* **Real-time Updates**: Live updates on appointment status.
* **Responsive Design**: Mobile-first approach for a seamless experience on any device.

---

## 🚀 Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | **React**, **Vite**, **Tailwind CSS** | Fast development, modern UI, and utility-first styling. |
| **Backend** | **Node.js**, **Express.js** | Scalable server-side logic and RESTful API. |
| **Database** | **MongoDB** | Flexible NoSQL database for data storage. |
| **Authentication** | **JWT (JSON Web Tokens)** | Secure, state-less authentication. |

---

## ⚙️ Prerequisites

Before running this project, ensure you have the following installed:

* **Node.js** (v16 or higher)
* **MongoDB** (v5 or higher)
* **npm** or **yarn**

---


## 🛠️ Installation & Setup

### 1. Clone the Repository

```sh
git clone https://github.com/ShakyaGurusinghe/Salon-Glimmer.git
cd Salon-Glimmer 
```


### 2. Run the Backend
#### Navigate to the backend directory, install dependencies, and start the server. You should run this command in a separate terminal or tab.

```sh
cd backend
npm install
npm run dev
```

### 3. Run the Frontend
#### Open another new terminal or tab, navigate to the frontend directory, install dependencies, and start the development server.

```sh
cd frontend
npm install
npm run dev
```

### After running both commands, your application will be available at:

#### Frontend: http://localhost:5173

#### Backend API: http://localhost:5001

### 📄 Environment Configuration
#### Create a file named .env in the backend directory and add the following configuration:

```sh
PORT=5001
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRE=30d
```