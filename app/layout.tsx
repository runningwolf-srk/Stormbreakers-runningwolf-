import "./globals.css";import Link from "next/link";
export default function RootLayout({children}:{children:React.ReactNode}){
return(<html lang="en"><body className="bg-black text-zinc-100 antialiased">
<header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur border-b border-zinc-900">
<div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">
<Link href="/" className="font-black tracking-[0.3em] text-sm">RUNNING WOLF • STORMBREAKERS</Link>
<nav className="flex gap-10">
<Link href="/armory" className="text-xs tracking-[0.25em] text-zinc-300 hover:text-white">ARMORY</Link>
<Link href="/chronicles" className="text-xs tracking-[0.25em] text-zinc-300 hover:text-white">CHRONICLES</Link>
<Link href="/word" className="text-xs tracking-[0.25em] text-zinc-300 hover:text-white">WORD</Link>
<Link href="/books" className="text-xs tracking-[0.25em] text-zinc-300 hover:text-white">BOOKS</Link>
</nav></div></header>
<main className="max-w-6xl mx-auto pt-20 pb-24">{children}</main>
<footer className="border-t border-zinc-900 py-16 text-center">
<p className="text-xs tracking-[0.4em] text-zinc-500">ONE CANON • FOUR EXPERIENCES • SIXTEEN RELICS • ONE KING</p>
<p className="text-xs tracking-[0.25em] text-zinc-600 mt-3">Hear → Understand → Root → Live • ⚔️ Forged: 3/16 • 🔥 In Progress: 0/16 • 🔒 Unrevealed: 13/16</p>
</footer></body></html>)}
