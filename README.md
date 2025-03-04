# 🚀 JS Authentication & Grammar Checker

## 🔧 Getting Started

1️⃣ Install:

- cd both project
- npm install on both


2️⃣ Create `.env.local` in backend:

- DATABASE_URL=your_mongodb_connection_string
- PORT=your_port_number
- JWT_SECRET=your_jwt_secret
- OPEN_AI_URL=your_open_ai_url
- OPENAI_API_KEY=your_open_ai_api_key

3️⃣ Run the Server:
- npm start in backend
- npx http-server in frontend

## 🔐 Authentication Details
- **Email:** `testing@testing.com`
- **Password:** `12345678`

## 🚦 Routes
- | Route | Description | Access |
- |------------|--------------------------|--------|
- | `/signup` | User Signup Page | Public |
- | `/login` | User Login Page | Public |
- | `/grammar` | Grammar Checker (Private) | Protected |



🔹 Click the thumbnail or [watch the demo here](https://streamable.com/rc3kna).