'use client'
import Link from 'next/link'
import { Poem } from '@/data/poems'

export default function PoemCard({ poem }: { poem: Poem }) {
  const preview = poem.lines
    ? `${poem.lines[0][0]} · ${poem.lines[0][1]}`
    : (poem.text?.split('\n')[0] || '')

  return (
    <Link href={`/poems/${poem.id}`} className="card p-5 block group">
      <div className="text-xs text-[#ca8a04] bg-[#ca8a04]/10 px-2 py-0.5 rounded-lg inline-block mb-3">
        {poem.category}
      </div>
      <h3 className="font-heading text-lg text-[#e8d5a3] mb-2 group-hover:text-[#ca8a04] transition-colors">
        {poem.title}
      </h3>
      <p className="font-heading text-sm text-[#8a7055] leading-relaxed line-clamp-2">
        {preview}
      </p>
      <div className="mt-3 text-xs text-[#ca8a04]">اقرأ القصيدة كاملة ←</div>
    </Link>
  )
}
