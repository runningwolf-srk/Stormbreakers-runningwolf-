"use client"
import "./globals.css";import Link from "next/link";import {usePathname} from "next/navigation";
export default function RootLayout({children}:{children:React.ReactNode}){
const pathname=usePathname();
const active=(p:string)=> pathname?.startsWith(p) ? "text-white border-b border-white" : "text-zinc-400 hover:text-white border-b border-transparent";
return(<html lang="en"><body className="bg-black text-zinc-100 antialiased tracking-wide">
<header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-zinc-900">
<div className="max-w-6xl mx-auto px-6 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
<Link href="/" className="font-black tracking-[0.3em] text-sm">RUNNING WOLF • STORMBREAKERS</Link>
<nav className="flex items-center gap-6 md:gap-10">
<Link href="/armory" className={`text-xs tracking-[0.25em] py-2 transition ${active("/armory")}`}>ARMORY</Link>
<Link href="/chronicles" className={`text-xs tracking-[0.25em] py-2 transition ${active("/chronicles")}`}>CHRONICLES</Link>
<Link href="/word" className={`text-xs tracking-[0.25em] py-2 transition ${active("/word")}`}>WORD</Link>
<Link href="/books" className={`text-xs tracking-[0.25em] py-2 transition ${active("/books")}`}>BOOKS</Link>
</nav></div></header>
<main className="max-w-6xl mx-auto pb-24">{children}</main>
<footer className="border-t border-zinc-900 py-16 text-center px-6">
<p className="text-xs tracking-[0.4em] text-zinc-500">ONE CANON • FOUR EXPERIENCES • SIXTEEN RELICS • ONE KING</p>
<p className="text-xs tracking-[0.25em] text-zinc-600 mt-4">Hear → Understand → Root → Live</p>
</footer></body></html>)}
