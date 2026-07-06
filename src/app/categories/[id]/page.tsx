'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { poems, categories } from '@/data/poems'
import PoemCard from '@/components/PoemCard'

export default function CategoryPage() {
  const { id } = useParams()
  const cat = categories.find(c => c.id === id)
  if (!cat) return <div className="text-center py-20 text-[#8a7055]">الفئة غير موجودة</div>

  const list = poems.filter(p => p.category === id)

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <Link href="/categories" className="text-sm text-[#ca8a04] hover:text-[#fde047] mb-6 inline-block">← جميع الفئات</Link>

      <div className="text-center mb-10">
        <div className="text-6xl mb-4">{cat.icon}</div>
        <h1 className="font-heading text-4xl text-[#ca8a04] mb-2">{cat.name}</h1>
        <p className="text-sm text-[#8a7055]">{cat.description}</p>
        <p className="text-sm text-[#ca8a04] mt-2">{list.length} قصيدة</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map(p => <PoemCard key={p.id} poem={p} />)}
      </div>
    </div>
  )
}
