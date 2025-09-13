import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";
import Image from "next/image";

const Dashboard = () => {
  return (
    // Main container with a light background and responsive padding
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-10">

      {/* Header Section (New Style) */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
        <p className="mt-2 text-lg text-gray-500">
          Create and Start Your AI Mockup Interview
        </p>
      </div>

      {/* Main Call-to-Action Card (New Style) */}
      {/* NOTE: We're keeping AddNewInterview here for a better CTA */}
      <div className="mb-12 rounded-2xl border bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">

          {/* Text and Button */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-700">
              Ready for a New Challenge?
            </h2>
            <p className="mt-2 text-gray-500">
              Click the button below to start a new mock interview tailored to your needs.
            </p>
            <div className="mt-3">
              <AddNewInterview />
            </div>
          </div>

          {/* Decorative SVG - Replace this with your own */}
          <Image
            src="/Coworking-amico.svg" // Path from the public folder
            alt="Coworking illustration"
            width={500} // Original width of the SVG for aspect ratio
            height={700} // Original height of the SVG for aspect ratio
            className="hidden h-100 w-80 md:block" // Control the display size
          />

        </div>
      </div>

      {/* Previous interview list (Restored to your original layout) */}
      <InterviewList />

    </div>
  );
};

export default Dashboard;