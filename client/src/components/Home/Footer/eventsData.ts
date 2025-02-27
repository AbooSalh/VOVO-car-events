export interface NavigationItem {
  id: number;
  title: string;
  url: string;
}

export interface FooterLink {
  id: number;
  title: string;
  url: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
}

export interface EventsData {
  siteName: string;
  tagline: string;
  websiteUrl: string;
  phone: string;
  email: string;
  developer: string;
  region: string;
  navigation: NavigationItem[];
  footerLinks: FooterLink[];
  socialLinks: SocialLinks;
}

export const eventsData: EventsData = {
  siteName: "VOVO Events",
  tagline: "Find car shows, car events & meets",
  websiteUrl: "VOVO Events.com",
  phone: "+20 1010508190",
  email: "info@vovoevents.com",
  developer: "YourDigital",
  region: "Egypt",
  navigation: [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Discover Events",
      url: "/discover",
    },
    {
      id: 3,
      title: "Sports, SuperCar & Exotics Events",
      url: "/supercars",
    },
    {
      id: 4,
      title: "Kustom, Modded & JDM Events",
      url: "/modded",
    },
    {
      id: 5,
      title: "Classic Car Events",
      url: "/classic",
    },
  ],
  footerLinks: [
    {
      id: 1,
      title: "Terms & conditions",
      url: "/terms",
    },
    {
      id: 2,
      title: "Refund Policy",
      url: "/refund",
    },
    {
      id: 3,
      title: "Privacy Policy",
      url: "/privacy",
    },
    {
      id: 4,
      title: "Sitemap",
      url: "/sitemap",
    },
  ],
  socialLinks: {
    facebook: "https://facebook.com/vovoevents",
    instagram: "https://instagram.com/vovoevents",
  },
};
