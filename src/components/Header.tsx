'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [menu, setMenu] = useState(false)
  const [user, setUser] = useState<{name:string;email:string}|null>(null)

  useEffect(() => {
    const s = localStorage.getItem('_wz_user')
    if (s) try { setUser(JSON.parse(s)) } catch {}
  }, [])

  return (
    <header className="sticky top-0 z-40 bg-[#0a0804]/95 backdrop-blur border-b border-[#ca8a04]/20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <span className="text-2xl">⚗</span>
          <span className="font-heading text-xl text-[#ca8a04] group-hover:text-[#fde047] transition-colors">وزير القصيد</span>
        </Link>

        <button className="md:hidden text-[#ca8a04] text-2xl" onClick={() => setMenu(!menu)}>☰</button>

        <nav className={`${menu ? 'flex' : 'hidden'} md:flex absolute md:relative top-full right-0 md:top-auto bg-[#0a0804] md:bg-transparent border border-[#ca8a04]/20 md:border-0 p-4 md:p-0 rounded-lg md:rounded-none flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center w-48 md:w-auto shadow-lg md:shadow-none z-50`}>
          <Link href="/" className="text-[#c9b07a] hover:text-[#ca8a04] transition-colors font-semibold text-sm">الرئيسية</Link>
          <Link href="/poems" className="text-[#c9b07a] hover:text-[#ca8a04] transition-colors font-semibold text-sm">القصائد</Link>
          <Link href="/categories" className="text-[#c9b07a] hover:text-[#ca8a04] transition-colors font-semibold text-sm">الفئات</Link>
          <Link href="/reciters" className="text-[#c9b07a] hover:text-[#ca8a04] transition-colors font-semibold text-sm">المنشدون</Link>
          <Link href="/about" className="text-[#c9b07a] hover:text-[#ca8a04] transition-colors font-semibold text-sm">عن الشعراء</Link>
          {user ? (
            <Link href="/dashboard" className="text-[#fde047] font-bold text-sm bg-[#ca8a04]/10 px-3 py-1 rounded-lg border border-[#ca8a04]/30">
              👤 {user.name}
            </Link>
          ) : (
            <Link href="/login" className="text-[#fde047] font-bold text-sm bg-[#ca8a04]/10 px-3 py-1 rounded-lg border border-[#ca8a04]/30">
              🔑 دخول
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
