import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { navLinks } from "../static";

export default function Sidebar({ open, loggedIn }: SidebarProps) {
  return (
    <nav
      className={`select-none fixed top-[72px] left-0 h-[calc(100vh-72px)] w-64 bg-white shadow-xl shadow-black transition-all duration-300 md:hidden ${
        open ? "translate-x-0" : "-translate-x-full"
      } z-50 flex flex-col`}
    >
      <div className="flex-1 overflow-y-auto">
        <SidebarLinks />
      </div>
      <div className="border-t p-2">
        <AuthLinks loggedIn={loggedIn} />
      </div>
    </nav>
  );
}

interface SidebarProps {
  open: boolean;
  loggedIn: boolean;
}

const SidebarLink = ({ href, icon, label }: (typeof navLinks)[number]) => (
  <li>
    <Link
      className="flex items-center gap-3 py-4 pl-4 text-black border-b transition duration-150 ease-in-out hover:bg-gray-100 hover:shadow-md"
      href={href}
    >
      {icon}
      <span>{label}</span>
    </Link>
  </li>
);

const SidebarLinks = () => (
  <ul className="text-lg">
    {navLinks.map((link) => (
      <SidebarLink key={link.href} {...link} />
    ))}
  </ul>
);

const AuthLinks = ({ loggedIn }: { loggedIn: boolean }) => {
  if (loggedIn) {
    return (
      <ul className=" text-lg text-black">
        <li>
          <Link
            className="flex items-center gap-3 py-2 pl-1 text-black"
            href="/account"
          >
            <FontAwesomeIcon icon={faUser} />
            <span>Account</span>
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className=" text-lg text-black">
      <li>
        <Link
          className="flex items-center gap-3 py-2 pl-1 text-black"
          href="/login"
        >
          <FontAwesomeIcon icon={faUser} />
          <span>Log In</span>
        </Link>
      </li>
      <li>
        <Link
          className="flex items-center gap-3 py-2 pl-1 text-black"
          href="/register"
        >
          <FontAwesomeIcon icon={faUser} />
          <span>Register</span>
        </Link>
      </li>
    </ul>
  );
};
