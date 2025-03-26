"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, AlarmClockCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="top-0 z-50 w-full bg-black/20 opacity-100 visible backdrop-blur-md border-b border-white/10">
      <div className="mx-auto px-4 md:px-6 lg:px-14">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group z-50">
            <img className="w-28 md:w-36" src="../logo.png" alt="logo" />
          </Link>

          {/* Centered Desktop Navigation */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
            <Link
              href="/"
              className="text-white/90 hover:text-rose-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-white/90 hover:text-rose-400 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-white/90 hover:text-rose-400 transition-colors font-medium"
            >
              Offerings
            </Link>
            <Link
              href="#contact"
              className="text-white/90 hover:text-rose-400 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link href={'/appointment'}>
            <button className="hidden md:flex items-center px-6 py-2.5 bg-rose-500 rounded-xl text-white font-medium hover:scale-105 transition-transform">
              <AlarmClockCheck className="h-5 w-5 mr-2" />
              Book Appointment
            </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white/90 hover:text-rose-400 p-2"
              aria-label="Open navigation menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden absolute top-20 left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-white/10 ${
              isOpen ? "block" : "hidden"
            } transition-all duration-300`}
          >
            <div className="flex flex-col items-center gap-6 py-6">
              <Link
                href="/"
                className="text-white/90 hover:text-rose-400 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-white/90 hover:text-rose-400 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-white/90 hover:text-rose-400 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Offerings
              </Link>
              <Link
                href="#contact"
                className="text-white/90 hover:text-rose-400 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <Link href={'/appointment'}>
              <button className="mt-4 px-8 py-3 bg-rose-500 rounded-xl text-white font-medium flex items-center justify-center hover:scale-105 transition-transform">
                <AlarmClockCheck className="h-6 w-6 mr-2" />
                Book Appointment
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
