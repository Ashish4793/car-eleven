import { Oxanium } from "next/font/google";
import "./globals.css";

export const viewport = {
  themeColor: 'black',
}
const oxanimumFont = Oxanium({
  variable: "--font-oxanimum-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Car Eleven",
  description: "Car Eleven Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ oxanimumFont.className } antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
