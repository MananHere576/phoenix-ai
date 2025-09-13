import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A1034] px-4">
      <div className="grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2">
        {/* Left side - illustration/logo */}
        <div className="flex flex-col items-center justify-center gap-6 p-8 text-center md:p-12">
          <Image
            src="/logo.svg"
            alt="Phoenix Logo"
            width={240}   // ✅ Explicitly set width
            height={240}  // ✅ Explicitly set height
          />
          <h2 className="text-2xl font-bold text-black md:text-3xl">Welcome Back</h2>
          <p className="text-gray-500">
            Sign in to continue your AI Interview practice.
          </p>
          <Image
            src="/Coworking-amico.svg"
            alt="Phoenix background"
            width={300} // You can adjust these for better quality/layout
            height={300}
            className="w-full max-w-[300px] object-contain" // Use object-contain and max-w for better responsiveness
          />
        </div>

        {/* Right side - SignIn form */}
        <div className="flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-md">
            <SignIn
              path="/sign-in"
              routing="path"
              signUpUrl="/sign-up"
              afterSignInUrl="/dashboard"   // ✅ added this
            />
          </div>
        </div>
      </div>
    </div>
  );
}
