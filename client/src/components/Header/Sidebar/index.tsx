import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { navLinks } from "../static";

interface SidebarProps {
  open: boolean;
  loggedIn: boolean;
}

export default function Sidebar({ open, loggedIn }: SidebarProps) {
  return (
    <nav
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl shadow-black transition-all duration-300 md:hidden ${
        open ? "translate-x-0" : "-translate-x-full"
      } z-50 flex flex-col`}
    >
      {/* Scrollable Links Section */}
      <div className="flex-1 overflow-y-auto pt-[72px]">
        <ul className="text-lg">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className="flex items-center gap-3 py-4 pl-4 text-black border-b transition duration-150 ease-in-out hover:bg-gray-100 hover:shadow-md"
                href={link.href}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="border-t p-2">
        <ul className=" text-lg text-black">
          {loggedIn ? (
            <Link
              className="flex items-center gap-3 py-2 pl-1 text-black"
              href="/account"
            >
              <FontAwesomeIcon icon={faUser} />
              <span>Account</span>
            </Link>
          ) : (
            <>
              <Link
                className="flex items-center gap-3 py-2 pl-1 text-black"
                href="/login"
              >
                <FontAwesomeIcon icon={faUser} />
                <span>Log In</span>
              </Link>
              <Link
                className="flex items-center gap-3 py-2 pl-1 text-black"
                href="/register"
              >
                <FontAwesomeIcon icon={faUser} />
                <span>Register</span>
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
