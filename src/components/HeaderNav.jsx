'use client'

import Link from "next/link";
import React, { useState } from "react";
// import { Menu, X } from "lucide-react";

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white w-full top-0 left-0 z-50">
      <div className="container lg:px-14 mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <img src="/images/logo.png" alt="" />

        {/* Desktop Menu */}
        <nav className="hidden md:flex text-sm space-x-6">
          <Link href="/" className="text-[#001008]">
            HOME
          </Link>
          <Link href="/about" className="text-[#001008]">
            ABOUT US
          </Link>
          <a href="#" className="text-[#001008]">
            SERVICES
          </a>
          <Link href="/sustainability" className="text-[#001008]">
            SUSTAINABILITY
          </Link>
          <a href="#" className="text-[#001008]">
            CONTACT  US
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* {isOpen ? <X size={28} /> : <Menu size={28} />} */}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-3 absolute top-16 left-0 w-full">
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Jobs
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default HeaderNav;
