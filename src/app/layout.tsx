import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "next-themes";

const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "German Gohringer",
  description: "Professional portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
