import './globals.css'
import type { Metadata } from "next";
import Header from '../components/Header'

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Gallex",
  description: "Gallex is a Next.js application that lets users view images in an interactive gallery. It provides a responsive and smooth experience for browsing and managing images.",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  keywords: ["Gallex", "Images in nextjs", "Gallery", "Next Gallery"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="bg-blue-50 w-[100%]">
          {children}
        </main>
      </body>
    </html>
  )
}
