"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const { isSignedIn } = useUser();

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Background hero image */}

      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo1.svg" // ✅ CORRECTED PATH
            alt="Phoenix Logo"
            width={60}
            height={60}
          />
          <h1 className="text-2xl font-bold tracking-wide">Phoenix AI</h1>
        </div>

        <Link
          href={isSignedIn ? "/dashboard" : "/sign-in"}
          className="px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
        >
          {isSignedIn ? "Dashboard" : "Sign In"}
        </Link>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 mt-20">
        <h2 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          Rise with <span className="text-blue-500">Phoenix AI</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          Personalized Human-like Online Evaluator for Next Interview
          eXcellence. <br />
          Prepare smarter, practice harder, and ace your dream job interviews
          with AI.
        </p>

        <Link
          href={isSignedIn ? "/dashboard" : "/sign-in"}
          className="mt-10 px-8 py-4 bg-blue-600 rounded-2xl font-semibold text-lg hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid gap-8 sm:grid-cols-3 mt-32 px-8 max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow hover:scale-105 transition">
          <h3 className="text-xl font-bold">Mock Interviews</h3>
          <p className="mt-2 text-gray-300">
            AI-powered realistic interview simulations tailored to your field.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow hover:scale-105 transition">
          <h3 className="text-xl font-bold">Instant Feedback</h3>
          <p className="mt-2 text-gray-300">
            Get detailed insights on answers, tone, and confidence instantly.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow hover:scale-105 transition">
          <h3 className="text-xl font-bold">Progress Tracking</h3>
          <p className="mt-2 text-gray-300">
            Monitor growth and track readiness for your next big interview.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Phoenix — AI Interview Mocker
      </footer>
    </main>
  );
}
