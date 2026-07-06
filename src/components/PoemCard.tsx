'use client'

import { useState } from 'react'
import AudioPlayer from './AudioPlayer'

interface Reciter {
  id: string
  name: string
  audioUrl: string
  duration: string
}

interface Poem {
  id: string
  title: string
  poet: string
  category: string
  text: string
  reciters: Reciter[]
}

export default function PoemCard({ poem }: { poem: Poem }) {
  const [activeReciter, setActiveReciter] = useState<string | null>(null)

  return (
    <div className="glass-card rounded-2xl p-6 hover:border-accent-600/30 transition-all duration-300">
      <div className="mb-4">
        <h3 className="font-heading text-xl text-accent-400 mb-2">{poem.title}</h3>
        <p className="text-gray-500 text-sm">{poem.poet}</p>
      </div>

      <div className="border-t border-white/5 pt-4 mb-4">
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {poem.text}
        </p>
      </div>

      <div className="space-y-2">
        {poem.reciters.map(reciter => (
          <div key={reciter.id}>
            <button
              onClick={() => setActiveReciter(activeReciter === reciter.id ? null : reciter.id)}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent-700/30 flex items-center justify-center text-accent-400 text-sm">
                  {reciter.name.charAt(0)}
                </div>
                <div className="text-right">
                  <div className="text-gray-300 text-sm">{reciter.name}</div>
                  <div className="text-gray-600 text-xs">{reciter.duration}</div>
                </div>
              </div>
              <svg className={`w-5 h-5 text-accent-500 transition-transform ${activeReciter === reciter.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeReciter === reciter.id && (
              <div className="mt-2 p-3 rounded-xl bg-white/5">
                <AudioPlayer audioUrl={reciter.audioUrl} title={poem.title} reciterName={reciter.name} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
