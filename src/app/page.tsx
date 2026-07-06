import Link from 'next/link'
import PoemCard from '@/components/PoemCard'
import CategoryCard from '@/components/CategoryCard'
import { poems, categories } from '@/data/poems'

export default function Home() {
  const latestPoems = poems.slice(0, 3)
  const stats = [
    { label: 'قصيدة', value: poems.length },
    { label: 'تصنيف', value: categories.length },
    { label: 'مقرئ', value: [...new Set(poems.flatMap(p => p.reciters.map(r => r.id)))].length },
  ]

  return (
    <>
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(234, 179, 8, 0.1) 0%, transparent 70%)'
        }} />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-accent-500 gold-glow mb-6">
            وزير القصيد
          </h1>
          <p className="text-xl md:text-2xl text-accent-200/80 mb-4 font-light">
            منصة الشعر النبطي الأصيل
          </p>
          <p className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            اكتشف روائع الشعر النبطي بأصوات أروع المقرئين. تجربة استماع فريدة تجمع بين الأصالة والحداثة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/categories" className="px-8 py-4 bg-accent-600 hover:bg-accent-500 text-primary-950 font-bold rounded-xl transition-all duration-300 text-lg">
              استكشف القصائد
            </Link>
            <Link href="/about" className="px-8 py-4 border border-accent-700/50 text-accent-400 hover:bg-accent-700/10 rounded-xl transition-all duration-300 text-lg">
              عن المنصة
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 text-center">
                <div className="text-4xl font-heading text-accent-500 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-accent-400 mb-4">التصنيفات</h2>
            <p className="text-gray-500">تصفح القصائد حسب التصنيف</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {categories.map(cat => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-accent-400 mb-4">أحدث القصائد</h2>
            <p className="text-gray-500">أحدث القصائد المضافة للمنصة</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {latestPoems.map(poem => (
              <PoemCard key={poem.id} poem={poem} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/categories" className="inline-block px-8 py-3 border border-accent-700/50 text-accent-400 hover:bg-accent-700/10 rounded-xl transition-all duration-300">
              عرض جميع القصائد ←
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-primary-900/50 to-primary-950" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-accent-400 mb-6">
            منصة الشعر النبطي الأولى
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            وزير القصيد هي منصة متخصصة في الشعر النبطي الأصيل، تجمع بين عراقة القصيدة وحداثة التقنية. نقدم تجربة استماع فريدة تجمع عشاق الكلمة الجميلة حول كنوز الشعر النبطي
          </p>
        </div>
      </section>
    </>
  )
}
