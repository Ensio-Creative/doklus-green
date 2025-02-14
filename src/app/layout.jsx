import "./globals.css";
import HeaderNav from "@/components/HeaderNav";
import FooterNav from "@/components/FooterNav";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Doklus Green Source Limited",
//   description: "Doklus Green Source Limited",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <HeaderNav />
        <main>
          {children}
        </main>
        <FooterNav />
      </body>
    </html>
  );
}
