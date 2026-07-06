'use client'
import Link from 'next/link'
import { Category } from '@/data/poems'

export default function CategoryCard({ cat }: { cat: Category }) {
  return (
    <Link href={`/categories/${cat.id}`} className="card p-6 block group text-center">
      <div className="text-5xl mb-3 transition-transform group-hover:scale-110">{cat.icon}</div>
      <h3 className="font-heading text-lg text-[#ca8a04] mb-2">{cat.name}</h3>
      <p className="text-sm text-[#8a7055] line-clamp-2 mb-3">{cat.description}</p>
      <div className="text-xs text-[#ca8a04] border-t border-[#2a2015] pt-3">{cat.poemsCount} قصيدة</div>
    </Link>
  )
}
