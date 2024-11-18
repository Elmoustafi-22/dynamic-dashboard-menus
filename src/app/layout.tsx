import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dashboard Menus",
  description: "Dynamic dashboard menus built using next.js, react, and tailwindcss.",
};

const roboto = Roboto({weight: ["400", "500", "700"], subsets: ["latin"]});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-secondary bg-opacity-40`}
      >
        <main className="flex p-5 h-lvh">
          <nav className="w-1/6 min-h-full">
            <div className="pr-5"></div>
          </nav>
          <section className="w-5/6 bg-white rounded-lg shadow-md">
            <div className="p-6">{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
}
