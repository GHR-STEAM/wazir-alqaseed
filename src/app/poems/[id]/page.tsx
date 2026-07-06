'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { poems, categories } from '@/data/poems'

export default function PoemDetailPage() {
  const { id } = useParams()
  const poem = poems.find(p => p.id === id)
  if (!poem) return <div className="text-center py-20 text-[#8a7055]">القصيدة غير موجودة</div>

  const related = poems.filter(p => p.category === poem.category && p.id !== poem.id).slice(0, 3)
  const catName = categories.find(c => c.id === poem.category)?.name || poem.category

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <Link href="/poems" className="text-sm text-[#ca8a04] hover:text-[#fde047] mb-6 inline-block">← العودة للقصائد</Link>

      <div className="card p-8 mb-8">
        <div className="text-xs text-[#ca8a04] bg-[#ca8a04]/10 px-2 py-0.5 rounded-lg inline-block mb-3">{catName}</div>
        <h1 className="font-heading text-3xl md:text-4xl text-[#ca8a04] mb-2">{poem.title}</h1>
        <p className="text-sm text-[#c9b07a] mb-4">للشاعر: {poem.poet}</p>

        <div className="poetry-text mt-6">
          {poem.lines ? poem.lines.map((b,i) => (
            <div key={i} className="poetry-bayt mb-2">
              <span className="poetry-sadr text-[#e8d5a3]">{b[0]}</span>
              <span className="poetry-sep">•••</span>
              <span className="poetry-ajz text-[#c9b07a]">{b[1]}</span>
            </div>
          )) : poem.text?.split('\n').map((l,i) => (
            <p key={i} className="text-[#e8d5a3] mb-1">{l}</p>
          ))}
        </div>
      </div>

      {poem.reciters.length > 0 && (
        <div className="card p-6 mb-8">
          <h2 className="font-heading text-xl text-[#ca8a04] mb-4">🎤 المنشدون</h2>
          <div className="space-y-3">
            {poem.reciters.map((r,i) => (
              <div key={i} className="flex items-center gap-3 bg-[#3d2b1f]/30 rounded-lg p-3">
                <span className="text-2xl">🎧</span>
                <div>
                  <p className="text-sm text-[#e8d5a3]">{r.name}</p>
                  <p className="text-xs text-[#8a7055]">{r.audioSrc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {related.length > 0 && (
        <div>
          <h2 className="font-heading text-xl text-[#ca8a04] mb-4">قصائد ذات صلة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map(p => (
              <Link key={p.id} href={`/poems/${p.id}`} className="card p-4 block">
                <h3 className="font-heading text-base text-[#e8d5a3] mb-1">{p.title}</h3>
                <p className="text-xs text-[#8a7055]">{p.poet}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
