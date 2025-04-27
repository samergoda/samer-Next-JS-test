import Link from "next/link";
import React from "react";
interface SidebarMenuProps {
  links: {
    name: string;
    href: string;
  }[];
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SidebarMenu({ links, setSidebarOpen, sidebarOpen }: SidebarMenuProps) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 z-50 md:hidden ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
      <div className="p-6 flex flex-col gap-6">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setSidebarOpen(false)}
            className="hover:text-gray-600 text-lg text-custom-colors-black ">
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
