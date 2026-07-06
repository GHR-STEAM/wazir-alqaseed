import { reciters, poems } from '@/data/poems'
import Link from 'next/link'

export default function RecitersPage() {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="font-heading text-4xl text-[#ca8a04] text-center mb-2">المنشدون</h1>
      <div className="sand-divider" />
      <p className="text-sm text-[#8a7055] text-center mb-10">منشدون يقرؤون قصائد عايد بن ضافي الجلوي</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reciters.map((r:any) => {
          const rPoems = poems.filter(p => p.reciters.some(pr => pr.id === r.id))
          return (
            <div key={r.id} className="card p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl opacity-60">🎤</div>
                <div>
                  <h2 className="font-heading text-xl text-[#ca8a04] mb-1">{r.name}</h2>
                  <p className="text-sm text-[#8a7055]">{r.bio || 'منشد متميز'}</p>
                </div>
              </div>
              <div className="border-t border-[#ca8a04]/10 pt-3 mt-3 space-y-1">
                {rPoems.slice(0, 3).map(p => (
                  <Link key={p.id} href={`/poems/${p.id}`}
                    className="block text-xs text-[#c9b07a] hover:text-[#ca8a04] transition-colors">
                    📜 {p.title}
                  </Link>
                ))}
                {rPoems.length > 3 && (
                  <p className="text-xs text-[#ca8a04] italic">+{rPoems.length - 3} قصائد أخرى</p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
