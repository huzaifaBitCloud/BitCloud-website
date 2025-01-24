"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  // const links = [
  //   { href: "/", label: "Home" },
  //   { href: "/about-us", label: "About us" },
  //   // { href: "/services", label: "Services" },
  //   { label: "Services", dropdown: true },
  //   { href: "/contact", label: "Contact" },
  // ];

  const links = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About us" },
    { 
      label: "Services", 
      dropdown: true, 
      options: [
        { href: "/services/design", label: "Design" },
        { href: "/services/development", label: "Development" },
        { href: "/services/marketing", label: "Marketing" },
      ]
    },
    { href: "/contact", label: "Contact" },
  ];
  

  const servicesLinks = [
    { href: "/web-development", label: "Web Development" },
    { href: "/mob-development", label: "Mobile Development" },
    { href: "/services/service3", label: "UI/UX Design" },
    { href: "/zoho-crm", label: "Zoho CRM" },
    { href: "/finance-account", label: "Finances & Accounting" },
  ];

  const isActive = (href) => pathname === href;

  return (
    <nav className="border-gray-200 bg-white shadow-md dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
        {/* <Link href="/" passHref> */}
          <div className="relative w-36 h-12 cursor-pointer flex items-center space-x-3">
          <Link href='/'>
            <img
              src="/images/logo.svg"
              alt="BitCloud Logo"
              className="h-14 mr-3"
            />
            </Link>
            {/* <Image
              src="/images/logo.svg"
              alt="BitCloud Logo"
              fill
              sizes="(max-width: 768px) 100px, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            /> */}
          </div>
        {/* </Link> */}

        <button
          type="button"
          data-collapse-toggle="navbar-dropdown"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-controls="navbar-dropdown"
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          <svg
            className="w-5 h-5"
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
          className={`${menu ? "block" : "hidden"} w-full md:block md:w-auto mob-nav-style`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800">
            {links.map(({ href, label, dropdown }) => (
             <li
             key={label}
             className="relative"
             onMouseEnter={dropdown ? () => setServicesDropdown(true) : null}
             onMouseLeave={dropdown ? () => setServicesDropdown(false) : null}
           >
             {dropdown ? (
               <span
                 className="block py-2 px-3 rounded cursor-pointer text-gray-900 dark:text-white"
               >
                 {label}
               </span>
             ) : (
               <Link href={href} passHref>
                 <span
                   className={`block py-2 px-3 rounded cursor-pointer ${
                     isActive(href)
                       ? "text-blue-700 dark:text-blue-500"
                       : "text-gray-900 dark:text-white"
                   }`}
                 >
                   {label}
                 </span>
               </Link>
             )}
             {dropdown && servicesDropdown && (
               <div className="z-50 absolute left-0 top-full w-48 bg-white border border-gray-200 shadow-lg rounded-lg">
                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                   {servicesLinks.map(({ href, label }) => (
                     <li key={href}>
                       <Link href={href} passHref>
                         <span
                           onClick={() => setServicesDropdown(false)}
                           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                         >
                           {label}
                         </span>
                       </Link>
                     </li>
                   ))}
                 </ul>
               </div>
             )}
           </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
