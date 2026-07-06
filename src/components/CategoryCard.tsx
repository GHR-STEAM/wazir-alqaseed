import Link from 'next/link'

const categoryIcons: Record<string, string> = {
  love: '💖', honor: '⚔️', nature: '🌴', memories: '📜', wisdom: '💎', celebrations: '🎉'
}

interface Category {
  id: string
  name: string
  description: string
  count: number
}

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/?category=${category.id}`}>
      <div className="glass-card rounded-2xl p-6 hover:border-accent-600/30 transition-all duration-300 group cursor-pointer">
        <div className="text-4xl mb-4">{categoryIcons[category.id] || '📖'}</div>
        <h3 className="font-heading text-xl text-accent-400 group-hover:text-accent-300 transition-colors mb-2">
          {category.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-3">{category.description}</p>
        <div className="text-xs text-accent-600 group-hover:text-accent-500 transition-colors">
          {category.count} قصيدة
        </div>
      </div>
    </Link>
  )
}
