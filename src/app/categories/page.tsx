import { categories } from '@/data/poems'
import Link from 'next/link'

const categoryIcons: Record<string, string> = {
  love: '💖', honor: '⚔️', nature: '🌴', memories: '📜', wisdom: '💎', celebrations: '🎉'
}

export default function CategoriesPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl text-accent-400 mb-4">التصنيفات</h1>
          <p className="text-gray-500 text-lg">تصفح القصائد حسب التصنيف</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(cat => (
            <Link key={cat.id} href={`/?category=${cat.id}`}>
              <div className="glass-card rounded-2xl p-8 hover:border-accent-600/30 transition-all duration-300 group cursor-pointer">
                <div className="text-5xl mb-6">{categoryIcons[cat.id] || '📖'}</div>
                <h3 className="font-heading text-2xl text-accent-400 group-hover:text-accent-300 transition-colors mb-3">
                  {cat.name}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">{cat.description}</p>
                <div className="text-sm text-accent-600 group-hover:text-accent-500 transition-colors">
                  {cat.count} قصيدة
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
