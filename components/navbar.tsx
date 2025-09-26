import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 pt-4 max-w-5xl mx-auto w-full bg-transparent">
      <div className="hidden w-full lg:flex justify-between items-center space-x-8 bg-secondary-900 backdrop-blur-sm rounded-full px-8 py-3 h-16">
        <Image
          src="/images/logo.png"
          alt="MyGuy Logo"
          width={100}
          height={100}
          className="rounded-full object-contain"
          priority
        />
        <div className="flex items-center space-x-8">
          <Link
            href="/"
            className="text-white hover:text-purple-300 transition-colors"
          >
            Home
          </Link>
          <Link
            href="about"
            className="text-white hover:text-purple-300 transition-colors"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-white hover:text-purple-300 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-white hover:text-purple-300 transition-colors"
          >
            Partner
          </Link>
        </div>
        <Button className="rounded-full text-sm font-medium px-6" asChild>
          <Link href="/waitlist">Join the waitlist</Link>
        </Button>
      </div>

      {/* Mobile view */}
      <div className="lg:hidden w-full space-x-8 bg-secondary-900 backdrop-blur-sm rounded-full px-8 py-2 flex justify-between items-center h-14">
        <Image
          src="/images/logo.png"
          alt="MyGuy Logo"
          width={100}
          height={100}
          className="rounded-full object-contain"
          priority
        />

        {/* Mobile menu trigger - positioned on the right */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-gray-900 w-10 h-10">
              <MenuIcon className="h-6 w-6 text-white" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[350px] sm:w-[300px] bg-white p-6 flex flex-col items-start space-y-6"
          >
            <Image
              src="/svgs/logo2.svg"
              alt="MyGuy Logo"
              width={100}
              height={100}
              className="rounded-full object-contain"
            />
            <Link
              href="/"
              className="text-gray-900 hover:text-purple-600 transition-colors text-lg font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-900 hover:text-purple-600 transition-colors text-lg font-medium"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-gray-900 hover:text-purple-600 transition-colors text-lg font-medium"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-gray-900 hover:text-purple-600 transition-colors text-lg font-medium"
            >
              Partner
            </Link>
            <Button className="px-6 py-3 text-lg font-medium w-full">
              <Link href="/waitlist">Join the waitlist</Link>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
