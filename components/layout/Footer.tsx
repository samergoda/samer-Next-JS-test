import Link from "next/link";
import React from "react";

export default function Footer() {
  const LINKS = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/" },
    { name: "Products", href: "/" },
    { name: "Pages", href: "/" },
  ];

  return (
    <footer className="border-t py-7">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          {/* Logo */}
          <h2 className="text-3xl text-custom-colors-black">FASCO</h2>

          {/* Links */}
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            {LINKS.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-gray-600 text-custom-colors-black text-lg">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Copyright © 2022 FASCO. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
