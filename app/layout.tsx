import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HR IQ | MOSH",
  description: "MOSH workforce intelligence platform",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
