import WaitlistForm from "@/components/waitlist-form";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main
      className="min-h-screen relative overflow-hidden flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/images/form-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Mobile Navbar */}
      <div className="absolute top-0 left-0 w-full md:hidden z-10">
        <Navbar />
      </div>
      {/* Desktop/Tablet Logo */}
      <div className="absolute top-8 left-8 hidden md:block">
        <a href="/">
          <Image
            src="/svgs/logo2.svg"
            alt="MyGuy Logo"
            width={120}
            height={120}
            className="mb-5 cursor-pointer"
          />
        </a>
      </div>
      <WaitlistForm />
    </main>
  );
}
