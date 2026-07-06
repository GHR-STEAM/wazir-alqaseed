'use client'
import { useState } from 'react'
import { poems, categories } from '@/data/poems'
import PoemCard from '@/components/PoemCard'

export default function PoemsPage() {
  const [filter, setFilter] = useState('all')
  const list = filter === 'all' ? poems : poems.filter(p => p.category === filter)

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="font-heading text-4xl text-[#ca8a04] text-center mb-2">جميع القصائد</h1>
      <div className="sand-divider" />
      <p className="text-sm text-[#8a7055] text-center mb-8">استعرض قصائد الشعر النبطي الأصيل</p>

      <div className="flex flex-wrap gap-2 justify-center mb-10">
        <button onClick={() => setFilter('all')}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all border ${filter==='all' ? 'bg-[#ca8a04]/20 border-[#ca8a04] text-[#ca8a04]' : 'bg-[#3d2b1f]/40 border-[#ca8a04]/20 text-[#c9b07a] hover:border-[#ca8a04]'}`}>
          الكل
        </button>
        {categories.map(cat => (
          <button key={cat.id} onClick={() => setFilter(cat.id)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all border ${filter===cat.id ? 'bg-[#ca8a04]/20 border-[#ca8a04] text-[#ca8a04]' : 'bg-[#3d2b1f]/40 border-[#ca8a04]/20 text-[#c9b07a] hover:border-[#ca8a04]'}`}>
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {list.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map(p => <PoemCard key={p.id} poem={p} />)}
        </div>
      ) : (
        <p className="text-center text-[#8a7055] py-12">لا توجد قصائد في هذه الفئة</p>
      )}
    </div>
  )
}
