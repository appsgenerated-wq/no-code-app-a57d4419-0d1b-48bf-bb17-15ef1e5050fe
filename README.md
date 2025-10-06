# Purrfect Eats - Cat Food Review App

Welcome to Purrfect Eats, a web application for discovering and reviewing cat food products. This app is built entirely with a Manifest backend and a React frontend.

## ✨ Features

- **User Authentication**: Sign up and log in to share your own reviews.
- **Browse Foods**: View a list of cat food products from various brands.
- **Read Reviews**: See what other cat owners think about different products.
- **Write Reviews**: Post your own ratings and comments on foods your cat has tried.
- **Admin Panel**: A complete backend interface for managing users, brands, foods, and reviews.

## 🛠️ Tech Stack

- **Backend**: [Manifest](https://www.mnfst.com/) - Handles the database, API, authentication, and file storage.
- **Frontend**: [React](https://reactjs.org/) with [Vite](https://vitejs.dev/) - A modern, fast frontend setup.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - For a utility-first, professional design.
- **SDK**: `@mnfst/sdk` - For seamless communication between the React app and the Manifest backend.

## 🚀 Getting Started

### Prerequisites

- Node.js and npm (or yarn).

### Running the Application

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  **Open the app**: Navigate to `http://localhost:5173` in your browser.

### Accessing the Admin Panel

The Manifest backend automatically provides a full-featured admin panel. You can access it at the backend URL provided during setup (e.g., `https://<your-app-id>.mnfst.app/admin`).

- **Default Admin Email**: `admin@manifest.build`
- **Default Admin Password**: `admin`

From the admin panel, you can add new brands and food products to populate the application.
