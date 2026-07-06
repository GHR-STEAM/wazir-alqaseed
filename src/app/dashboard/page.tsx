'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { poems, categories, reciters } from '@/data/poems'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<{name:string;email:string}|null>(null)

  useEffect(() => {
    const s = localStorage.getItem('_wz_user')
    if (!s) { router.push('/login'); return }
    try { setUser(JSON.parse(s)) } catch { router.push('/login') }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('_wz_user')
    localStorage.removeItem('_wz_token')
    router.push('/login')
  }

  if (!user) return null

  const totalReciters = new Set(poems.flatMap(p => p.reciters.map(r => r.id))).size
  const avgReciters = (poems.reduce((sum, p) => sum + p.reciters.length, 0) / poems.length).toFixed(1)

  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-l from-[#1a140d] via-[#2a2015] to-[#1a140d] border-b-2 border-[#ca8a04]/30 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <Link href="/" className="font-heading text-xl text-[#ca8a04]">🌙 وزير القصيد</Link>
            <p className="text-xs text-[#8a7055] mt-0.5">لوحة تحكم المسؤول</p>
          </div>
          <button onClick={handleLogout}
            className="px-4 py-2 bg-red-900/20 border border-red-600 text-red-400 rounded-lg text-sm font-semibold hover:bg-red-900/40 transition-colors">
            👋 {user.name} · خروج
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label:'القصائد', num:poems.length, icon:'📜', color:'#ca8a04' },
            { label:'الفئات', num:categories.length, icon:'🏷️', color:'#ca8a04' },
            { label:'المنشدون', num:totalReciters, icon:'🎤', color:'#ca8a04' },
            { label:'متوسط/قصيدة', num:avgReciters, icon:'⭐', color:'#ca8a04' },
          ].map((stat,i) => (
            <div key={i} className="card p-5 text-center border-2 border-[#ca8a04]/15">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-xs text-[#8a7055] mb-1">{stat.label}</div>
              <div className="font-heading text-3xl text-[#ca8a04]">{stat.num}</div>
            </div>
          ))}
        </div>

        {categories.length > 0 && (
          <div className="card p-6 mb-8">
            <h3 className="font-heading text-xl text-[#ca8a04] mb-4">📈 توزيع القصائد بحسب الفئات</h3>
            <div className="space-y-4">
              {categories.map(cat => (
                <div key={cat.id}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-[#c9b07a]">{cat.icon} {cat.name}</span>
                    <span className="text-[#ca8a04]">{cat.poemsCount} قصيدة</span>
                  </div>
                  <div className="w-full bg-[#0a0804] rounded-full h-2">
                    <div className="bg-gradient-to-l from-[#ca8a04] to-[#fde047] h-2 rounded-full transition-all"
                      style={{width:`${(cat.poemsCount / Math.max(...categories.map(c=>c.poemsCount)))*100}%`}} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Link href="/dashboard/poems" className="card p-5 text-center hover:border-[#ca8a04]/40 transition-all group">
            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">📝</div>
            <div className="text-sm text-[#ca8a04] font-semibold">إدارة القصائد</div>
          </Link>
          <Link href="/dashboard/categories" className="card p-5 text-center hover:border-[#ca8a04]/40 transition-all group">
            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">🏷️</div>
            <div className="text-sm text-[#ca8a04] font-semibold">إدارة الفئات</div>
          </Link>
          <Link href="/dashboard/reciters" className="card p-5 text-center hover:border-[#ca8a04]/40 transition-all group">
            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">🎤</div>
            <div className="text-sm text-[#ca8a04] font-semibold">إدارة المنشدين</div>
          </Link>
          <Link href="/" className="card p-5 text-center hover:border-[#ca8a04]/40 transition-all group">
            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">🏠</div>
            <div className="text-sm text-[#ca8a04] font-semibold">العودة للموقع</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
