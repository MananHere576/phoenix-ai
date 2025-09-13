<p align="center">
  <img src="/public/logo.svg" alt="Login Screen" width="600" />
</p>

# 🚀 Full Stack AI Mock Interview App

This is a modern **AI Mock Interview Application** built using **Next.js**, **React**, **Drizzle ORM**, **Gemini AI**, and **Clerk** for user authentication. The app allows users to experience a simulated interview by generating AI-powered questions, recording their answers via speech-to-text, and saving them into a database for a final report.

---

## ✅ Features

- 🎯 AI-generated Interview Questions (via Gemini AI)
- 🎙️ Speech-to-Text Answer Recording
- 📊 Save questions & answers in a database
- ✅ User Authentication with Clerk
- ⚡ Built using Next.js for SSR & SSG
- 💾 Persistent storage with PostgreSQL (via Drizzle ORM)

---

## ⚙️ Technologies Used

| Layer        | Technology           |
|-------------|----------------------|
| Frontend    | Next.js, React.js     |
| Backend     | Drizzle ORM, Clerk    |
| Database    | PostgreSQL             |
| AI API      | Gemini AI              |
| Auth        | Clerk Authentication  |

---

## 🔧 Environment Variables

Create a `.env.local` file in the root of your project and define the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

NEXT_PUBLIC_DRIZZLE_DB_URL=your_postgres_connection_url

NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
```
⚠️ Important: Do not share your .env.local publicly or commit it to version control.

## 🚀 How to Run Locally
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/ai-mock-interview-app.git
cd ai-mock-interview-app
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm run dev
Open your browser at http://localhost:3000

## ⚡ Folder Structure

-- .next # Next.js build output (auto-generated)
-- app # Application routes and pages (Next.js 13+ App Router)
-- components # Reusable React components
-- lib # API logic, database connection, utilities
-- node_modules # Installed npm packages
-- public # Static assets (images, icons, etc.)
-- utils # Helper functions and utilities
-- .env.local # Environment variables (ignored by git)

## ✅ Authentication Flow
User signs up or logs in via Clerk

Protected interview page is accessible only after authentication

User sees generated questions one by one

Answers are recorded as speech and converted to text

Data is saved into PostgreSQL via Drizzle ORM

## 🖼️ Auth flow Diagram
![Authflow](/public/auth_img.png)

## 🖼️ Work flow Diagram
![Workflow](/public/workflow.png)


## 🎯 Production Build
bash
Copy code
npm run build
npm run start
Ensure .env.local is properly configured in production.

## 📚 Database
Managed using Drizzle ORM

PostgreSQL is the database backend

## ⚠️ Notes
Gemini API requires a valid API key.

Clerk handles authentication securely.

Never share secrets publicly.
