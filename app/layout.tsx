import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const fonts = Poppins({
  weight:["100","200","300","400","500","600","700","800","900"],
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Travel for you",
  description: "Travel page in Next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={` ${fonts.className} antialiased`} >
          <ResponsiveNav/>
          {children}
          <Footer/>
          <ScrollToTop/>
      </body>
    </html>
  );
}
