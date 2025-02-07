import Link from "next/link";
import { navLinks } from "./static";
import MenuButton from "./MenuButton";
export default function Header() {
  const loggedIn = true;

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-black text-white py-4 px-20 flex items-center justify-between shadow-lg h-[72px] z-50">
        <Logo />
        <Navigation loggedIn={loggedIn} />
        <MenuButton />
      </header>
    </>
  );
}

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center text-[32px] font-semibold select-none"
    >
      VOVO
    </Link>
  );
}

function Navigation({ loggedIn }: { loggedIn: boolean }) {
  return (
    <div className="flex items-center md:gap-4 gap-0">
      <nav className="flex gap-8">
        {navLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:text-gray-400 text-[18px] hidden md:block"
          >
            {item.label}
          </Link>
        ))}
        {!loggedIn && (
          <>
            <div className="border-l border-gray-700 h-6 hidden md:block"></div>
            <Link href="/login" className="hidden md:block hover:text-gray-400">
              Log In
            </Link>
            <Link
              href="/register"
              className="hidden md:block hover:text-gray-400"
            >
              Register
            </Link>
          </>
        )}
      </nav>
      {loggedIn && <Avatar />}
    </div>
  );
}

function Avatar() {
  return (
    <Link
      className="relative size-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 md:ml-10"
      href="/dashboard"
    >
      <svg
        className="absolute w-12 h-12 text-gray-400 -left-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        ></path>
      </svg>
    </Link>
  );
}
