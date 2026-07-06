'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { categories } from '@/data/poems'

export default function ManageCategoriesPage() {
  const router = useRouter()
  useEffect(() => { if (!localStorage.getItem('_wz_user')) router.push('/login') }, [router])

  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-l from-[#1a140d] via-[#2a2015] to-[#1a140d] border-b-2 border-[#ca8a04]/30 px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/dashboard" className="text-[#ca8a04] hover:text-[#fde047] text-sm">← العودة</Link>
          <h1 className="font-heading text-xl text-[#ca8a04] mt-1">🏷️ إدارة الفئات</h1>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map(cat => (
            <div key={cat.id} className="card p-5">
              <div className="text-5xl mb-3">{cat.icon}</div>
              <h3 className="font-heading text-lg text-[#ca8a04] mb-2">{cat.name}</h3>
              <p className="text-sm text-[#8a7055] line-clamp-2 mb-3">{cat.description}</p>
              <p className="text-xs text-[#ca8a04] border-t border-[#2a2015] pt-3">{cat.poemsCount} قصيدة</p>
            </div>
          ))}
        </div>
        <p className="text-center text-[#8a7055] text-sm mt-8">🚧 قريباً - إضافة وحذف وتعديل الفئات</p>
      </div>
    </div>
  )
}
