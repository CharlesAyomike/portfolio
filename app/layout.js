import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const BricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata = {
  title: "Charles Ayomike Portfolio",
  description:
    "Charles Ayomike is a full stack developer, building the future one line of code at a time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${BricolageGrotesque.variable} antialiased bg-gray-100 dark:bg-gray-950 transition-all duration-500`}
      >
        {children}
      </body>
    </html>
  );
}
