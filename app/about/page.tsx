import { Metadata } from "next";
import AnimatedAbout from "@/components/animated-about";

export const metadata: Metadata = {
  title: "About Us | Web3 Bit",
  description:
    "Learn about our mission, values, and the team behind Web3 Bit. Discover how we're shaping the future of web3 technology.",
  openGraph: {
    title: "About Us | Web3 Bit",
    description:
      "Learn about our mission, values, and the team behind Web3 Bit. Discover how we're shaping the future of web3 technology.",
    type: "website",
  },
};

export default function About() {
  return <AnimatedAbout />;
}
