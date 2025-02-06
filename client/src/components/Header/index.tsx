import Link from "next/link";

export default function Header() {
  const loggedIn = false;
  const links = [
    { href: "/events", label: "Car Events" },
    { href: "/add-event", label: "Add Event" },
    { href: "/more", label: "More" },
  ];
  return (
    <header className="bg-black text-white py-4 px-20 flex items-center justify-between shadow-lg position-fixed">
      <Logo />
      <div className="flex items-center gap-4">
        <nav className="flex gap-8">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-gray-400 text-[18] hidden md:block"
            >
              {item.label}
            </Link>
          ))}
          {!loggedIn && (
            <>
              <div className="border-l border-gray-700 h-6 hidden md:block"></div>
              <Link
                href="/login"
                className="hidden md:block hover:text-gray-400"
              >
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
    </header>
  );
}

function Avatar() {
  return (
    <Link
      className="relative size-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ml-10"
      href={""}
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
function Logo() {
  return (
    <Link href="/" className="flex items-center text-lg text-[32px]">
      VOVO
    </Link>
  );
}
