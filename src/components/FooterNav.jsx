import { stringToSlug } from "@/utils/stringToSlug";
import Link from "next/link";
import React from "react";
// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const FooterNav = () => {
  const services = ["Real Estate", "Tank Calibration", "Pressure Testing", "Leak Testing", "Project Management", "Procurement", "Fabrication", "Environmental Assessment", "SOP Report", "MISTDO Training"]

  return (
    <footer className="bg-[#001008] lg:px-20 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Column 1 - Brand Info */}
          <div>
            <img src="/images/logo-white.png" alt="" />

            {/* <h2 className="text-lg font-semibold mb-3">Edenn</h2>
            <p className="text-sm text-gray-400">
              Connecting tech creatives with job opportunities, freelance gigs, and networking.
            </p> */}
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h2 className="mb-3 text-white">OUR COMPANY</h2>
            <ul className="space-y-2 text-sm text-[#009C3E]">
              <li className="py-1"><Link href="/about">About us</Link></li>
              <li className="py-1"><a href="#">Services</a></li>
              <li className="py-1"><Link href="/sustainability">Sustainability</Link></li>
              <li className="py-1"><Link href="/contact">Contact us</Link></li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h2 className="mb-3 text-white">QUICK LINKS</h2>
            <ul className="space-y-2 text-sm text-[#009C3E]">
              {services.slice(0, 5).map((single, index) => <li className="py-1" key={index}><Link href={`/services?page=${stringToSlug(single)}`}>{single}</Link></li>)}
              {/* <li><a href="#">Tank Calibration</a></li>
              <li><a href="#">Tank Fabrication</a></li>
              <li><a href="#">Pressure Testing</a></li>
              <li><a href="#">Leak Testing</a></li> */}
            </ul>
          </div>

          {/* Column 4 - Social Media */}
          <div>
            <h2 className="mb-3 text-white">QUICK LINKS</h2>
            <ul className="space-y-2 text-sm text-[#009C3E]">
              {services.slice(5, services.length).map((single, index) => <li className="py-1" key={index}><Link href={`/services?page=${stringToSlug(single)}`}>{single}</Link></li>)}

              {/* <li><a href="#">Environmental Assessment</a></li>
              <li><a href="#">Procurement</a></li>
              <li><a href="#">Project Management</a></li>
              <li><a href="#">SOP Report</a></li>
              <li><a href="#">MISTDO Training</a></li> */}
            </ul>
          </div>

          {/* Column 5 - Newsletter */}
          <div>
            <h2 className="mb-3 text-white">CONNECT WITH US</h2>
            <ul className="space-y-2 text-sm text-[#009C3E]">
              <li className="py-1"><a href="#">Facebook</a></li>
              <li className="py-1"><a href="#">X (Twitter)</a></li>
              <li className="py-1"><a href="#">Linkedin</a></li>
              <li className="py-1"><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="lg:flex justify-between border-t border-[#FFFFFF33] mt-10 text-white text-xs pt-10">
          <div className="text-[10px]">
            © COPYRIGHT {new Date().getFullYear()} DOKLUS GREEN SOURCE LIMITED. ALL RIGHTS RESREVED.
          </div>
          <div className="sm:mt-4 text-[10px]">
            <a href="https://www.instagram.com/ensiocreative/" target="_blank">DESIGNED BY ENSIO CREATIVE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;
