"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import Image from "next/image";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "/", text: "home" },
    { id: 2, link: "/about", text: "about" },
    { id: 3, link: "/conditions-treated", text: "conditions treated" },
    { id: 4, link: "/homeopathy-course", text: "homeopathy course" },
    { id: 5, link: "/contact", text: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-gray-800 bg-gray-50 fixed nav z-50 shadow-md">
      <div className="flex items-center h-full">
        <Link href="/" className="flex items-center">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-2xl font-bold">Logo</span>
        </Link>
      </div>

      <ul className="hidden md:flex space-x-6">
        {links.map(({ id, link, text }) => (
          <li
            key={id}
            className="nav-links cursor-pointer capitalize font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <Link href={link}>{text}</Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center">
        <button className="bg-[#e28743] text-white px-4 py-2 rounded-full hover:bg-[#c77738] transition duration-300 flex items-center space-x-2">
          <ShoppingCart size={20} />
          <span>Cart</span>
        </button>
        <button
          onClick={() => setNav(!nav)}
          className="ml-4 p-2 rounded-full hover:bg-gray-200 transition-colors duration-200 md:hidden"
        >
          {nav ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {nav && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 md:hidden">
          <div className="flex flex-col h-full bg-white w-64 p-4">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="flex items-center" onClick={() => setNav(false)}>
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                <span className="text-2xl font-bold">Logo</span>
              </Link>
              <button
                onClick={() => setNav(false)}
                className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>
            <ul className="flex flex-col space-y-4">
              {links.map(({ id, link, text }) => (
                <li
                  key={id}
                  className="nav-links cursor-pointer capitalize font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <Link href={link} onClick={() => setNav(false)}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;