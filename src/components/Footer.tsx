import { ArrowUpRight } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-12 bg-[radial-gradient(circle,_#0234F8,_#011F92)] p-5 rounded-lg ">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <img src="Nest-Nepal-Title-dark-1080x216 1.svg" alt="logo" />
          </div>

          <div className="text-sm opacity-80">
            <h4 className="font-semibold mb-2 opacity-100">Nepal</h4>
            <p>Call us: +977 986-160-1174</p>
            <p>Kupondole, Lalitpur, Nepal</p>
            <p>support@nestsms.com</p>
          </div>
        </div>

        <div className="border-t border-white/40 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
          <span>Google Workspace</span>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Why google workspace?
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Pricing
            </a>
            <a
              href="#"
              className="hover:opacity-100 transition-opacity flex items-center gap-1"
            >
              Get A Quotation <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
