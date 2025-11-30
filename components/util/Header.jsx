"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AiFillMoon } from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside or on a link
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#stacks", label: "Skills" },
    { href: "#projects", label: "Project" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <div className="bg-white/20 w-full md:w-4/5 h-16 rounded-4xl ring-1 ring-black/5 isolate shadow mx-auto mt-7 mb-3 backdrop-blur-md">
        <div className="flex items-center justify-between p-5 h-full">
          <div className="flex-1">
            <span className="text-lg font-semibold">{" <Ayomike /> "}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <Link
                      className="hover:text-gray-500 duration-700 transition-colors"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      className="hover:text-gray-500 duration-700 transition-colors"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right side - Menu button and Theme toggle */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <HiX size={24} className="text-gray-800 dark:text-white" />
              ) : (
                <HiMenu size={24} className="text-gray-800 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <span className="text-lg font-semibold text-gray-800 dark:text-white">
              {" <Ayomike /> "}
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <HiX size={24} className="text-gray-800 dark:text-white" />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 p-6">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <Link
                      onClick={handleLinkClick}
                      className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 font-medium"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      onClick={handleLinkClick}
                      className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 font-medium"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
