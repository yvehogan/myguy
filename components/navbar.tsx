import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 max-w-5xl mx-auto w-full bg-transparent">
      <div className="hidden w-full md:flex justify-between items-center space-x-8 bg-secondary-900 backdrop-blur-sm rounded-full px-8 py-3">
     <Image
     src='/images/logo.png'
      alt="MyGuy Logo"
      width={120}
      height={120}
      className="rounded-full"
     />
     <div className="flex items-center space-x-8">
        <Link href="/" className="text-white hover:text-purple-300 transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-white hover:text-purple-300 transition-colors">
          About
        </Link>
        <Link href="#" className="text-white hover:text-purple-300 transition-colors">
          Features
        </Link>
        <Link href="#" className="text-white hover:text-purple-300 transition-colors">
          Partner
        </Link>
     </div>
        <Button className="rounded-full text-sm font-medium px-6">
          Join the Waitlist
        </Button>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-gray-900">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[350px] sm:w-[300px] bg-white p-6 flex flex-col items-start space-y-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-gray-900 font-semibold text-xl">myguy</span>
            </div>
            <Link href="/" className="text-gray-900 hover:text-purple-600 transition-colors text-lg font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-purple-600 transition-colors text-lg font-medium">
              About
            </Link>
            <Link href="#" className="text-gray-900 hover:text-purple-600 transition-colors text-lg font-medium">
              Features
            </Link>
            <Link href="#" className="text-gray-900 hover:text-purple-600 transition-colors text-lg font-medium">
              Partner
            </Link>
            <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full px-6 py-3 text-lg font-medium w-full">
              Join the Waitlist
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
