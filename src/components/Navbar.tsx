"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className=" border-gray-200 bg-white shadow-md">
      <div className="xs:w-full sm:w-full lg:w-[90%] flex flex-wrap items-center justify-between mx-auto p-1 sm:p-4 relative">
        <Link href="/" passHref>
          {/* <div className="flex items-center cursor-pointer gap-1"> */}
          <div className="relative w-24 h-12 md:w-32 md:h-16 lg:w-48 lg:h-24">
            <Image
              src="/images/logo.svg"
              alt="Flowbite Logo"
              fill
              sizes="(max-width: 768px) 100px, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            />
          </div>
        </Link>

        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-200 "
          aria-controls="navbar-default"
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          <svg
            className="w-3.5 sm:w-6 h-3.5 sm:h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`absolute top-full left-0 w-full z-50 transition-all duration-500 ease-in-out bg-gray-50 ${
            menu ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden md:relative md:max-h-full md:opacity-100 md:w-auto md:flex md:bg-transparent dark:md:bg-transparent`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col sm:p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0 dark:border-gray-700">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} passHref>
                  <span
                    onClick={() => setMenu(false)} // Close the menu on click
                    className={`block py-2 px-3 rounded ${
                      isActive(href)
                        ? "text-blue-600 md:bg-transparent hover:text-black hover:bg-gray-200 md:dark:text-blue-500"
                        : "text-black hover:bg-gray-200"
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
