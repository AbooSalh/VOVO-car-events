"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { EventsData } from "@/lib/data/carEvents";

interface CarEventsWebsiteProps {
  data: EventsData;
}

const Navigation = ({ data }: CarEventsWebsiteProps) => {
  return (
    <header className="border-b border-neutral-800">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex flex-wrap justify-center gap-4 text-sm">
          {data.navigation.map((item) => (
            <li key={item.id}>
              <Link
                href={item.url}
                className="hover:text-red-600 transition-colors"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

const MainContent = ({ data }: CarEventsWebsiteProps) => {
  return (
    <main className=" flex flex-col items-center justify-center text-center py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.siteName}</h1>
      <p className="text-xl mb-6">{data.tagline}</p>

      <p className="mb-8">Car events in {data.region}</p>

      <div className="w-full max-w-2xl h-px bg-red-800 mb-8"></div>

      <div className="space-y-2">
        <p className="font-semibold">{data.websiteUrl}</p>
        <p className="flex items-center justify-center gap-2">
          <Phone size={16} />
          {data.phone}
        </p>
        <p className="flex items-center justify-center gap-2">
          <Mail size={16} />
          {data.email}
        </p>
      </div>

      <div className="w-full max-w-2xl h-px bg-red-800 my-8"></div>

      <div className="text-sm">
        <ul className="flex flex-wrap justify-center gap-4 mb-4">
          {data.footerLinks.map((link, index) => (
            <li key={link.id} className="flex items-center">
              <Link
                href={link.url}
                className="hover:text-red-600 transition-colors"
              >
                {link.title}
              </Link>
              {index < data.footerLinks.length - 1 && (
                <span className="mx-4">|</span>
              )}
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-4 mb-6">
          <Link
            href={data.socialLinks.facebook}
            className="hover:text-red-600 transition-colors"
          >
            <Facebook />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href={data.socialLinks.instagram}
            className="hover:text-red-600 transition-colors"
          >
            <Instagram />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

const Footer = ({ data }: CarEventsWebsiteProps) => {
  return (
    <footer className="bg-red-900 py-4 text-center text-sm">
      <div className="container mx-auto px-4">
        <p>
          Copyright &copy; {new Date().getFullYear()} {data.siteName}. All
          rights reserved.
        </p>
        <p>Developed by {data.developer}</p>
      </div>
    </footer>
  );
};

export default function FooterComponent({ data }: CarEventsWebsiteProps) {
  return (
    <div className="flex flex-col bg-black text-white">
      <Navigation data={data} />
      <MainContent data={data} />
      <Footer data={data} />
    </div>
  );
}
