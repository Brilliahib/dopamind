"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "/public/images/logo-dopamind.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative">
      <div className="flex flex-row items-center justify-between px-4 md:px-8 mx-auto border-gray-100 shadow-xl border-2 p-2 rounded-full w-full md:w-2/3 my-4 md:my-8">
        <Image
          src={logo}
          alt="logo"
          height={50}
          width={50}
          className="shrink-0"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row items-center justify-center space-x-8 lg:space-x-16 font-medium">
          <li className="cursor-pointer hover:text-blue-500 transition-colors">
            Home
          </li>
          <li className="cursor-pointer hover:text-blue-500 transition-colors">
            About
          </li>
          <li className="cursor-pointer hover:text-blue-500 transition-colors">
            Feature
          </li>
          <li className="cursor-pointer hover:text-blue-500 transition-colors">
            Info
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50"
          onClick={toggleMenu}
          aria-label="Menu Toggle"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <ul className="flex flex-col items-center justify-center h-full space-y-8 font-medium">
            <li
              className="cursor-pointer hover:text-blue-500 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:text-blue-500 transition-colors"
              onClick={toggleMenu}
            >
              About
            </li>
            <li
              className="cursor-pointer hover:text-blue-500 transition-colors"
              onClick={toggleMenu}
            >
              Feature
            </li>
            <li
              className="cursor-pointer hover:text-blue-500 transition-colors"
              onClick={toggleMenu}
            >
              Info
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
