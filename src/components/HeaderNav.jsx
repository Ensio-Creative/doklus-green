'use client'

import { stringToSlug } from "@/utils/stringToSlug";
import Link from "next/link";
import React, { useState } from "react";
// import { Menu, X } from "lucide-react";

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false)
  const services = ["Real Estate", "Tank Calibration", "Pressure Testing", "Leak Testing", "Project Management", "Procurement", "Tank Fabrication", "Environmental Assessment", "SOP Report", "MISTDO Training"]

  return (
    <header className="bg-white fixed w-full top-0 left-0 z-10">
      <div className="container lg:px-14 mx-auto flex justify-between items-center p-4">
        {/* Logo */}

        <Link href={'/'}>
          <img src="/images/logo.png" alt="" />
        </Link>
        {/* Desktop Menu */}
        <nav className="hidden md:flex text-sm space-x-6">
          <Link href="/" className="text-[#001008]">
            <h2>HOME</h2>
          </Link>
          <Link href="/about" className="text-[#001008]">
            <h2>ABOUT US</h2>
          </Link>
          <a onClick={() => setShow(!show)} href="#" className="text-[#001008] flex">
            <h2>SERVICES</h2>
            <img className={`my-auto ml-3 ${show && 'rotate-180'}`} src="/images/Vector.png" alt="" />
          </a>
          <Link href="/sustainability" className="text-[#001008]">
            <h2>SUSTAINABILITY</h2>
          </Link>
          <Link href="/contact" className="text-[#001008]">
            <h2>CONTACT  US</h2>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >

          {isOpen ? <img src="/images/close.png" alt="" /> : <img src="/images/bar.png" alt="" />}
        </button>
      </div>

      {show && <div className="lg:fixed border-t border-[#E1E1E1]  sm:hidden left-0 right-0 top-16 grid grid-cols-4 gap-4 w-full bg-white px-20 py-10 z-30">
        {services.map((single, index) => <div key={index} className="py-4 border-b border-[#009C3E]">
          <Link onClick={() => setShow(!show)} href={`/services?page=${stringToSlug(single)}`}><h2>{single}</h2></Link>
        </div>)}
      </div>}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-[#E1E1E1] bg-white z-10 h-full p-4 space-y-3 fixed top-16 left-0 w-full">
          <div className="border-b border-[#009C3E] py-4 text-xl">
            <Link href="/" onClick={() => setIsOpen(!isOpen)} className="text-[#001008]">
              <h2>HOME</h2>
            </Link>
          </div>
          <div className="border-b border-[#009C3E] py-4 text-xl">
            <Link onClick={() => setIsOpen(!isOpen)} href="/about" className="text-[#001008]">
              <h2>ABOUT US</h2>
            </Link>
          </div>
          <div className="border-b border-[#009C3E] py-4 text-xl">
            <a onClick={() => setShow(!show)} href="#" className="text-[#001008] flex">
              <h2>SERVICES</h2>
              <img className={`my-auto ml-6 ${show && 'rotate-180'}`} src="/images/caret.png" alt="" />
            </a>
            {show && services.map((single, index) => <div key={index}><Link onClick={() => setIsOpen(!isOpen)}
              href={`/services?page=${stringToSlug(single)}`} className="text-[#009C3E] text-sm">
              {single}
            </Link></div>)}
          </div>
          <div className="border-b border-[#009C3E] py-4 text-xl">
            <Link onClick={() => setIsOpen(!isOpen)} href="/sustainability" className="text-[#001008]">
              <h2>SUSTAINABILITY</h2>
            </Link>
          </div>
          <div className="border-b border-[#009C3E] py-4 text-xl">
            <Link onClick={() => setIsOpen(!isOpen)} href="/contact" className="text-[#001008]">
              <h2>CONTACT  US</h2>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderNav;
