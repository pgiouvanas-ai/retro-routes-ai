import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// two fonts
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


//Metadata
export const metadata: Metadata = {
  title: "The Retro Routes Experience — Dublin Walking Tours | Vintage, Street Art & Halloween",
  description: "Small-group guided walking tours in Dublin. Vintage shopping, street art, and haunted Halloween experiences. Rated 5.0 on TripAdvisor. Book now.",
};

//shared layout among all pages
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="bg-purple-dark text-cream">{children}</body>
    </html>
  );
}
