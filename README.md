# Our Love Space - A Couple's Private Sanctuary

A private and interactive website for couples to store memories, track milestones, and plan their future together.

## Features
- **Landing Page**: A romantic introduction to your private world.
- **Authentication**: Secure JWT-based login for exactly two users.
- **Dashboard**: Welcome message, anniversary countdown, and latest memories.
- **Timeline**: Vertical relationship milestone tracker with images.
- **Gallery**: Responsive photo grid with year-based filtering.
- **Memory Jar**: Add short happy moments and open them randomly with a smooth fade animation.
- **Love Letters**: Text editor to write and save formatted love letters in a paper-style view.
- **Goals Tracker**: Track shared goals with visual progress bars.
- **Vision Board**: Upload images for future dreams with a clean grid layout.
- **Settings**: Update profile names, anniversary dates, and passwords.
- **Extras**: Background music and dark mode toggle.

## Tech Stack
- **Frontend**: Vanilla HTML, CSS, JavaScript.
- **Backend**: Node.js with Express.
- **Database**: MongoDB (Mongoose).
- **Authentication**: JWT with bcrypt password hashing.
- **File Uploads**: Multer.

## Prerequisites
- Node.js installed on your machine.
- MongoDB installed and running locally (or a MongoDB Atlas URI).

## Installation & Setup

1. **Clone the repository** (or extract the files).

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Open the `.env` file in the root directory and ensure the values match your setup:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/ourlovespace
   JWT_SECRET=yoursupersecretkey
   NODE_ENV=development
   ```

4. **Run the server**:
   ```bash
   node backend/server.js
   ```
   Or if you have nodemon installed:
   ```bash
   npm run dev (if added to package.json)
   # Alternatively:
   npx nodemon backend/server.js
   ```

5. **Access the application**:
   Open your browser and navigate to `http://localhost:5000`.

## Usage
1. Register the first user.
2. Register the second user.
   *Note: Only two users are allowed to register.*
3. Log in and start building your love space!
4. Set your anniversary date in **Settings** to see the countdown on the dashboard.

## Folder Structure
- `backend/`: Server logic, models, routes, and uploads.
- `frontend/`: HTML, CSS, and client-side JavaScript.
- `.env`: Environment configuration.
- `package.json`: Project dependencies.
