import { categories } from '@/data/poems'
import CategoryCard from '@/components/CategoryCard'

export default function CategoriesPage() {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="font-heading text-4xl text-[#ca8a04] text-center mb-2">فئات الشعر</h1>
      <div className="sand-divider" />
      <p className="text-sm text-[#8a7055] text-center mb-10">استكشف أنواع الشعر النبطي المختلفة</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map(cat => <CategoryCard key={cat.id} cat={cat} />)}
      </div>
    </div>
  )
}
