'use client'

import { themes } from '../../data/word'
import { armory } from '../../data/armory'
import { chapters } from '../../data/chronicles'
import { useState } from 'react'
import Link from 'next/link'

export default function WordPage() {
  const [openTheme, setOpenTheme] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-400 tracking-widest mb-4">THE WORD</h1>
          <p className="text-amber-400 font-bold text-lg mb-2">God speaks.</p>
          <p className="text-amber-200/70">Every song anchored in Scripture. Every story rooted in The Word.</p>
        </header>

        <div className="space-y-4">
          {themes.map((theme) => (
            <div key={theme.slug} className="border border-amber-400/20">
              <button
                onClick={() => setOpenTheme(openTheme === theme.slug ? null : theme.slug)}
                className="w-full text-left p-6 hover:bg-amber-400/5 transition"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{theme.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-amber-200">{theme.title}</h2>
                    <p className="text-amber-200/60 text-sm">{theme.scriptures.length} passages</p>
                  </div>
                </div>
              </button>

              {openTheme === theme.slug && (
                <div className="border-t border-amber-400/20 p-6 space-y-10">
                  {theme.scriptures.map((verse) => (
                    <div key={verse.ref}>
                      <h3 className="text-xl font-semibold text-amber-400 mb-2">{verse.ref}</h3>
                      <p className="text-amber-100 mb-6 italic">"{verse.text}"</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 ml-4 border-l-2 border-amber-400/30 pl-4">
                        {verse.relics.length > 0 && (
                          <div>
                            <p className="text-amber-200/60 text-sm mb-2">Connected Relics:</p>
                            <div className="space-y-2">
                              {verse.relics.map((relicSlug) => {
                                const relic = armory.find(r => r.slug === relicSlug)
                                if (!relic) return null
                                return (
                                  <Link
                                    key={relicSlug}
                                    href={`/armory#${relicSlug}`}
                                    className="block px-3 py-2 bg-amber-400/10 border border-amber-400/30 text-amber-200 text-sm hover:bg-amber-400/20"
                                  >
                                    {relic.song}
                                  </Link>
                                )
                              })}
                            </div>
                          </div>
                        )}

                        {verse.chapters.length > 0 && (
                          <div>
                            <p className="text-amber-200/60 text-sm mb-2">Connected Chapters:</p>
                            <div className="space-y-2">
                              {verse.chapters.map((chapterSlug) => {
                                const chapter = chapters.find(c => c.slug === chapterSlug)
                                if (!chapter) return null
                                return (
                                  <Link
                                    key={chapterSlug}
                                    href={`/chronicles/${chapterSlug}`}
                                    className="block px-3 py-2 bg-amber-400/10 border border-amber-400/30 text-amber-200 text-sm hover:bg-amber-400/20"
                                  >
                                    {chapter.title}
                                  </Link>
                                )
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
