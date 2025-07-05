"use client";

import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
  FaUser,
  FaFileAlt,
  FaImages,
  FaServer,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { RiHome5Line } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-6 right-6 z-50 text-white bg-cyan-600 p-4 rounded-full text-2xl"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-[#040b14] text-white z-40 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Close Button */}
        <div className="md:hidden flex justify-end p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl"
          >
            <FaTimes />
          </button>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center px-6 py-0 md:py-10">
          <Image
            src="/hero-bg.png"
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full border-4 border-gray-700"
          />
          <h2 className="mt-6 text-2xl font-bold text-white">Alex Smith</h2>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 mt-6 justify-center">
          {[FaTwitter, FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn].map(
            (Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-white hover:text-cyan-400 transition text-xl"
              >
                <Icon />
              </a>
            )
          )}
        </div>

        {/* Navigation */}
        <nav className="mt-12 px-10 space-y-6 text-lg">
          <SidebarLink icon={<RiHome5Line />} label="Home" href="#hero" />
          <SidebarLink icon={<FaUser />} label="About" href="#about" />
          <SidebarLink icon={<FaFileAlt />} label="Resume" href="#resume" />
          <SidebarLink icon={<FaImages />} label="Projects" href="#portfolio" />
          <SidebarLink icon={<FaServer />} label="Services" href="#services" />
          <SidebarLink icon={<FaEnvelope />} label="Contact" href="#contact" />
        </nav>
      </aside>
    </>
  );
}

function SidebarLink({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 text-gray-300 hover:text-white transition"
    >
      <span className="text-2xl">{icon}</span>
      {label}
    </Link>
  );
}
