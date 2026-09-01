export const SITE = {
  name: "Susanta",
  seoTitle: "Susanta Sahoo | Digital Marketing, SEO & WordPress",
  tagline: "Designs, talks, and writes about web, health, and life.",
  description: "Designs, talks, and writes about web, health, and life.",
  author: "Susanta",
  // authorAvatar: "https://susanta.com/wp-content/uploads/2025/12/Susanta-Profile-Pic.jpeg", // optional URL — falls back to initials circle if blank
  // authorAvatar: "/images/susanta-avatar.jpeg", // optional URL — use the porfile photo image folder
  // authorAvatar: "https://github.com/topleague/mencamax/blob/main/public/images/susanta-avatar.jpeg", // optional URL — use the porfile photo image folder
  authorAvatar: "authorAvatar: "raw.githubusercontent.com/topleague/mencamax/main/public/images/susanta-avatar.jpeg",", 
  authorBio: "Designs, talks, and writes about web, health, and life.",
  email: "go@susanta.top",
  social: [
    // { label: 'Twitter', href: 'https://twitter.com/yourhandle' },
  ] as { label: string; href: string }[],
  gallery: [
    // Add image URLs to show in the footer's gallery column.
    // "https://example.com/photo1.jpg",
  ] as string[],
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Tags", href: "/tags/" },
  { label: "Elements", href: "/elements/" },
] as const;
