"use client";

import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { CiSearch } from "react-icons/ci";
import { MdOutlinePersonOutline, MdOutlineShoppingBag } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { Menu } from "lucide-react";
import { useState } from "react";
import SidebarMenu from "./SidebarMenu";

export default function Navbar() {
  const { cart } = useCart();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  const LINKS = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/" },
    { name: "Products", href: "/" },
    { name: "Pages", href: "/" },
  ];

  return (
    <>
      {/* Sidebar (Mobile Only) */}
      <SidebarMenu links={LINKS} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />}
      {/* Top Navbar */}
      <header className="border-b sticky top-0 bg-white z-30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Mobile Menu + Logo */}
          <div className="flex items-center gap-4 md:hidden">
            <button onClick={() => setSidebarOpen(true)}>
              <Menu size={28} />
            </button>
            <Link href="/" className="text-2xl font-bold text-custom-colors-black">
              FASCO
            </Link>
          </div>

          {/* Desktop Logo */}
          <Link href="/" className="hidden md:block text-[52px] text-custom-colors-black font-bold">
            FASCO
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-6">
            {LINKS.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-gray-600 text-lg text-custom-colors-black ">
                  {" "}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <ul className="flex items-center gap-6">
            <li>
              <CiSearch size={24} />
            </li>
            <li>
              <MdOutlinePersonOutline size={24} />
            </li>
            <li>
              <IoMdStarOutline size={24} />
            </li>
            <li>
              <Link className="relative" href="/cart">
                <MdOutlineShoppingBag size={24} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
