import Link from "next/link";

export default function Header() {
  const loggedIn = true;
  return (
    <header className="bg-black text-white py-4 px-20 flex items-center justify-between shadow-lg">
      <Logo />
      <div className="flex items-center gap-4">
        <nav className="flex gap-20">
          <Link href="/events" className="hover:text-gray-400">
            Car Events
          </Link>
          <Link href="/add-event" className="hover:text-gray-400">
            Add Event
          </Link>
          <Link href="/more" className="hover:text-gray-400">
            More
          </Link>
        </nav>
      </div>
      {loggedIn ? (
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block hover:text-gray-400">
            Log In
          </Link>
          <Link
            href="/register"
            className="hidden md:block hover:text-gray-400"
          >
            Register
          </Link>
        </div>
      ) : (
        <Avatar />
      )}
    </header>
  );
}

function Avatar() {
  return (
    <Link
      className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
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
    <Link href="/" className="flex items-center text-lg font-bold">
      <span className="text-2xl">🚗</span> VOVO
    </Link>
  );
}
