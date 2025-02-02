import React from "react";
// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const FooterNav = () => {
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
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h2 className="mb-3 text-white">QUICK LINKS</h2>
            <ul className="space-y-2 text-sm text-[#009C3E]">
              <li><a href="#">Real Estate</a></li>
              <li><a href="#">Tank Calibration</a></li>
              <li><a href="#">Tank Fabrication</a></li>
              <li><a href="#">Pressure Testing</a></li>
              <li><a href="#">Leak Testing</a></li>
            </ul>
          </div>

          {/* Column 4 - Social Media */}
          <div>
            <h2 className="mb-3 text-white">QUICK LINKS</h2>
            <ul className="space-y-2 text-sm text-[#009C3E]">
              <li><a href="#">Environmental Assessment</a></li>
              <li><a href="#">Procurement</a></li>
              <li><a href="#">Project Management</a></li>
              <li><a href="#">SOP Report</a></li>
              <li><a href="#">MISTDO Training</a></li>
            </ul>
          </div>

          {/* Column 5 - Newsletter */}
          <div>
            <h2 className="mb-3 text-white">CONNECT WITH US</h2>
            <ul className="space-y-2 text-sm text-[#009C3E]">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">X (Twitter)</a></li>
              <li><a href="#">Linkedin</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="lg:flex justify-between border-t border-[#FFFFFF33] mt-10 text-white text-xs pt-10">
          <div>
            © COPYRIGHT {new Date().getFullYear()} DOKLUS GREEN SOURCE LIMITED. ALL RIGHTS RESREVED.
          </div>
          <div className="sm:mt-4">
            DESIGNED BY ENSIO CREATIVE
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;
