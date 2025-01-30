import "./globals.css";
import {Montserrat as montserrat} from "next/font/google";


const font = montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});


export const metadata = {
  title: "Home Page | AnyTech",
  description: "This is home page of AnyTech",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>{children}</body>
    </html>
  );
}
