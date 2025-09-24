import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Dioni Krisna Saputra Lodrigus — Software Developer",
  author: "Dioni Krisna Saputra Lodrigus",
  description:
    "Software Developer based in Madiun City, East Java. I specialize in Web Development using Laravel, and also have Mobile Development using Flutter.",
  lang: "en",
  siteLogo: "/dion-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About Me", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/dioni-lodrigus" },
    { text: "Github", href: "https://github.com/dioniks12" },
    { text: "Instagram", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Dioni Krisna Saputra Lodrigus",
    specialty: "Web Developer",
    summary:
      "Developer based in Madiun City, East Java. I specialize in Web Development using Laravel, MySQL, PostgreSQL, additionally, I have experience in Mobile Development using Flutter.",
    email: "dionilodrigus12@email.com",
  },
  experience: [
    {
      company: "Dinas Komunikasi dan Informatika Kota Madiun",
      position: "Software Developer Internship",
      startDate: "Jan 2025",
      endDate: "Feb 2025",
      summary: [
        "Succesfully finished internship project at Dinas Komunikasi dan Informatika Kota Madiun, and also integrating Laravel, PostgreSQL, and RTSP to provide live CCTV in every locations.",
      ],
    },
  ],
  projects: [
    {
      name: "Quick Fresh Laundry",
      summary: "Successfully completed the Quick Fresh Laundry project, a major assignment for the Web Programming course in my 5th semester. Working collaboratively in a team, implemented a user-friendly UI by adhering to best practices in design.",
      image: "/laundry.png",
    },
    {
      name: "Barbershop App",
      summary: "Completed a salon-themed Android application project using Flutter. Implemented a user-friendly UI by following best design practices and integrated REST APIs for efficient data management.",
      image: "/barbershop.png",
    },
    {
      name: "Atma Kitchen Bakery & Sales",
      summary: "Sucessfully finished web based project on 6th semester, Implementing Laravel framework and MySQL databases about bakery and order topics",
      image: "/atma-kitchen.png",
    },
    {
      name: "Financial and Goods Management System For UMKM Toko UUS Kanigoro",
      summary: "Successfully finished a Final Assignment Project about Financial and Goods Management for Toko UUS Kanigoro, to helps the owner to maintain the financial and support the decision making for her business.",
      image: "/toko-uus.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Dioni Krisna Saputra Lodrigus, A Fresh graduated and passionate Web Developer with a talent for crafting seamless digital experiences. With a strong background in both Android and iOS development, along with expertise in front-end web technologies, I thrive at the intersection where creativity meets technology.

      Over the years, I've honed my skills in building robust, user-friendly applications that not only meet user needs but also push the boundaries of what's possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/dion-big.jpg",
  },
};

// #5755ff
