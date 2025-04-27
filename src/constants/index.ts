import { FaDiscord, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";

export const NAV_ITEMS = [
  { label: "TRAILER", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Nexus", href: "#nexus" },
  { label: "Story", href: "#story" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/hba777/Game-ShowCase-Website",
} as const;

export const SOCIAL_LINKS = [
  {
    href: "https://discord.com",
    icon: FaDiscord,
  },
  {
    href: "https://twitter.com",
    icon: FaTwitter,
  },
  {
    href: "https://youtube.com",
    icon: FaYoutube,
  },
  {
    href: "https://twitch.com",
    icon: FaTwitch,
  },
] as const;
