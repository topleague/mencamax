export const SITE = {
  name: "Susanta",
  tagline: "Designs, talks, and writes about web, health, and life.",
  description: "A clean, editorial Markdown blog.",
  author: "Susanta",
  authorAvatar: "https://susanta.com/wp-content/uploads/2025/12/Susanta-Profile-Pic.jpeg", // optional URL — falls back to initials circle if blank
  authorBio: "Designs, talks, and writes about web, health, and life.",
  email: "you@example.com",
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
