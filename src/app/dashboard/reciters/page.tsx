'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { poems } from '@/data/poems'

export default function ManageRecitersPage() {
  const router = useRouter()
  useEffect(() => { if (!localStorage.getItem('_wz_user')) router.push('/login') }, [router])

  const recitersMap = new Map<string, {id:string;name:string;poems:string[]}>()
  poems.forEach(p => p.reciters.forEach(r => {
    if (!recitersMap.has(r.id)) recitersMap.set(r.id, { id:r.id, name:r.name, poems:[] })
    recitersMap.get(r.id)!.poems.push(p.title)
  }))
  const recitersList = Array.from(recitersMap.values())

  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-l from-[#1a140d] via-[#2a2015] to-[#1a140d] border-b-2 border-[#ca8a04]/30 px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/dashboard" className="text-[#ca8a04] hover:text-[#fde047] text-sm">← العودة</Link>
          <h1 className="font-heading text-xl text-[#ca8a04] mt-1">🎤 إدارة المنشدين</h1>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {recitersList.map(r => (
            <div key={r.id} className="card p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🎤</span>
                <h3 className="font-heading text-lg text-[#ca8a04]">{r.name}</h3>
              </div>
              <p className="text-xs text-[#8a7055] mb-2">ينشد في {r.poems.length} قصائد</p>
              <div className="space-y-1">
                {r.poems.map((t,i) => (
                  <p key={i} className="text-xs text-[#c9b07a]">📜 {t}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        {recitersList.length === 0 && (
          <p className="text-center text-[#8a7055] py-12">لا يوجد منشدون</p>
        )}
      </div>
    </div>
  )
}
