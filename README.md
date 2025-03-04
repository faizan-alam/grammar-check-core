# 🚀 JS Authentication & Grammar Checker

## 🔧 Getting Started

1️⃣ Install Dependencies:

Navigate to the backend directory and install dependencies:
- cd backend
- npm install


2️⃣ Create .env.local in the Backend:

- DATABASE_URL=your_mongodb_connection_string
- PORT=your_port_number
- JWT_SECRET=your_jwt_secret
- API_URL=your_api_url
- OPENAI_API_KEY=your_open_ai_api_key

3️⃣ Run the Server:

### Backend:
- cd backend
- npm start

### Frontend:
- cd frontend
- npx http-server

## 🔐 Authentication Details
- **Email:** `testing@testing.com`
- **Password:** `12345678`

## 🚦 API Routes
- | Route | Description | Access |
- |------------|--------------------------|--------|
- | /auth/register | User Signup Page | Public |
- | /auth/login | User Login Page | Public |
- | /check-grammar | Grammar Checker (Private) | Protected |


## 🎥 Demo
🔹 Deployed Link: https://open-ai-frontend-sooty.vercel.app/login.html

🔹 Click the thumbnail or [watch the demo here](https://streamable.com/6aozyd).