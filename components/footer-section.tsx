"use client";
import { Button } from "@/components/ui/button";
import { IoIosSend } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import {
  AnimatedContainer,
  AnimatedElement,
  AnimatedHeading,
} from "@/components/ui/animated-element";

export default function FooterSection() {
  return (
    <div className="p-2 rounded-full">
      <div className="bg-secondary-900 rounded-[40px]">
        <footer className="py-20 max-w-6xl mx-auto text-white p-4">
          <AnimatedContainer className="flex flex-col md:flex-row justify-between items-start mb-12">
            <AnimatedHeading
              level={3}
              className="text-2xl md:text-[30px] font-medium mb-4 max-w-xl"
              delay={0.1}
            >
              Subscribe to our newsletter to get our latest updates
            </AnimatedHeading>
            <AnimatedElement
              className="flex relative w-full md:w-[350px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-full bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <Button className="absolute right-3 top-1 bottom-0 text-white rounded-full h-10 w-[60px]">
              <IoIosSend className="w-5 h-5 text-white" />
              </Button>
            </AnimatedElement>
          </AnimatedContainer>

          <AnimatedContainer
            className="w-full flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {/* Logo and Tagline */}
            <AnimatedElement
              className="col-span-full lg:col-span-1 mb-8 lg:mb-0"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/logo.png"
                alt="MyGuy Logo"
                width={120}
                height={120}
                className="mb-5"
              />
              <p className="text-white text-sm leading-relaxed max-w-sm">
                Redefining masculinity in Africa—through healing, mentoring, and
                meaningful conversations.
              </p>
            </AnimatedElement>

            {/* Quick Links */}
            <AnimatedElement
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-4 text-white text-sm font-light">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-300 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-300 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-300 transition-colors"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </AnimatedElement>

            {/* Connect with Us */}
            <AnimatedElement
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-base font-medium mb-4">Connect with Us</h3>
              <address className="not-italic space-y-4 text-white text-sm font-light">
                <p>Lagos, Nigeria</p>
                <p>
                  <a
                    href="mailto:hello@myguy.me"
                    className="hover:text-purple-300 transition-colors"
                  >
                    hello@myguy.me
                  </a>
                </p>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="bg-white text-secondary-900 hover:text-purple-300 transition-colors p-2 rounded-full"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>

                  <a
                    href="#"
                    aria-label="X (Twitter)"
                    className="bg-white text-secondary-900 hover:text-purple-300 transition-colors p-2 rounded-full"
                  >
                    <BsTwitterX className="w-4 h-4" />
                  </a>

                  <a
                    href="#"
                    aria-label="Instagram"
                    className="bg-white text-secondary-900 hover:text-purple-300 transition-colors p-2 rounded-full"
                  >
                    <BiLogoInstagramAlt className="w-4 h-4" />
                  </a>
                </div>
              </address>
            </AnimatedElement>
          </AnimatedContainer>

          {/* Copyright and Legal */}
          <AnimatedElement
            className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center font-light text-xs text-[#F7F8FA]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2025 MyGuy. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-purple-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-purple-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </AnimatedElement>
        </footer>
      </div>
    </div>
  );
}
