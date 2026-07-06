'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { poems, categories } from '@/data/poems'

export default function ManagePoemsPage() {
  const router = useRouter()
  const [search, setSearch] = useState('')

  useEffect(() => {
    const user = localStorage.getItem('_wz_user')
    if (!user) router.push('/login')
  }, [router])

  const filtered = poems.filter(p =>
    p.title.includes(search) || p.poet.includes(search)
  )

  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-l from-[#1a140d] via-[#2a2015] to-[#1a140d] border-b-2 border-[#ca8a04]/30 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/dashboard" className="text-[#ca8a04] hover:text-[#fde047] text-sm transition-colors">← العودة</Link>
          <h1 className="font-heading text-xl text-[#ca8a04]">📝 إدارة القصائد</h1>
          <div className="w-16" />
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-3 mb-6">
          <input type="text" placeholder="ابحث عن قصيدة..."
            value={search} onChange={e => setSearch(e.target.value)}
            className="flex-1 bg-[#0a0804] border border-[#ca8a04]/20 rounded-lg px-4 py-2 text-white focus:border-[#ca8a04] outline-none" />
        </div>

        <div className="space-y-3">
          {filtered.map(p => (
            <div key={p.id} className="card p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-heading text-lg text-[#ca8a04] mb-1">{p.title}</h3>
                  <p className="text-xs text-[#8a7055] mb-2">للشاعر: {p.poet}</p>
                  <div className="flex gap-2 text-xs">
                    <span className="bg-[#ca8a04]/10 text-[#ca8a04] px-2 py-0.5 rounded">{p.category}</span>
                    <span className="text-[#8a7055]">🎤 {p.reciters.length} منشد</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => alert('🚧 قريباً - تعديل القصيدة')}
                    className="px-3 py-2 bg-[#ca8a04] text-[#0a0804] rounded-lg text-sm font-semibold hover:bg-[#d49a11] transition-colors">✏️</button>
                  <button onClick={() => alert('🚧 قريباً - حذف القصيدة')}
                    className="px-3 py-2 bg-red-900/20 text-red-400 border border-red-600 rounded-lg text-sm hover:bg-red-900/40 transition-colors">🗑️</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[#8a7055] py-12">لا توجد نتائج</p>
        )}
      </div>
    </div>
  )
}
