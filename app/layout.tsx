import "./globals.css"
import Link from "next/link"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-zinc-100 antialiased">
        <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-zinc-900">
          <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
            <Link href="/" className="font-black tracking-[0.25em] text-sm">
              RUNNING WOLF • STORMBREAKERS
            </Link>
            <nav className="flex gap-8">
              <Link href="/armory
