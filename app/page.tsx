"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
export default function Home() {
  const [query, setQuery] = useState("")
  const [result, setResult] = useState("")
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#0f0c29] to-[#302b63] text-white font-sans">
      <header className="w-full py-4 px-6 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold tracking-tight">
          SmartRecco
        </h1>
      </header>
      <main className="flex flex-col items-center justify-center text-center px-4 pt-10 pb-20">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Find what you'll love. <br />
          <span className="text-pink-500">
            Instantly.
          </span>
        </h2>
        <p className="text-lg text-gray-300 max-w-xl mb-6">
          Ask for books, movies, podcasts or courses.
        </p>
        <div className="w-full max-w-xl flex items-center bg-[#1f1f2e] rounded-full px-4 py-3 shadow-lg ring-1 ring-white/10 hover:right-pink-500 transition">
          <input type="text" placeholder="Suggest fantasy novels..." className="bg-transparent w-full text-white placeholder-gray-400 outline-none text-sm"
            value={query}
            onChange={(e) => setQuery(e.target.value)} />
          <button className="ml-4 text-sm font-semibold text-pink-400 hover:text-pink-300 transition">
            Search
          </button>
        </div>
        <div className="mt-6 flex gap-3 flex-wrap justify-center max-w-2xl">{[
          "Suggest fantasy novels",
          "Recommend anime like Naruto",
          "Find YouTube channels about computer programming",
          "Courses for learning React and Web Development",
        ].map((example) => (
          <button key={example} onClick={() => setQuery(example)} className="text-xs bg-white/10 px-4 py-2 rounded-full text-white hover:bg-pink-500 transition cursor-pointer">
            {example}
          </button>
        ))}
        </div>
        {result && (
          <div className="mt-12 grid gap-4 max-w-xl w-full text-left whitespace-pre-wrap text-sm">
            {result.split("\n").filter(Boolean).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="bg-[#232336] p-4 rounded-xl border border-white/10 hover:border-pink-500 transition shadow-md">
                <div className="text-white leading-snug">
                  {line}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}