import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A1034] px-4">
      <div className="grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2">
        {/* Left side - SignUp form */}
        <div className="flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-md">
            <SignUp
              path="/sign-up"
              routing="path"
              signInUrl="/sign-in"
              afterSignUpUrl="/dashboard"   // ✅ added this
            />
          </div>
        </div>

        {/* Right side - illustration/logo */}
        <div className="flex flex-col items-center justify-center gap-6 p-8 text-center md:p-12">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={250}
            height={250}
            className="mb-4"
          />
          <h2 className="text-2xl font-bold md:text-3xl">Join Us Today</h2>
          <p className="text-gray-500">
            Create your account and start AI-powered interview prep instantly.
          </p>
          <Image
            src="/sign-up.svg"
            alt="Illustration"
            width={350}
            height={350}
            className="mt-6 opacity-80"
          />
        </div>
      </div>
    </div>
  );
}
