import { poems } from '@/data/poems'

export default function RecitersPage() {
  const recitersMap = new Map()
  poems.forEach(poem => {
    poem.reciters.forEach(reciter => {
      if (!recitersMap.has(reciter.id)) {
        recitersMap.set(reciter.id, {
          id: reciter.id,
          name: reciter.name,
          poems: [],
        })
      }
      recitersMap.get(reciter.id).poems.push(poem.title)
    })
  })
  const reciters = Array.from(recitersMap.values())

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl text-accent-400 mb-4">المقرئون</h1>
          <p className="text-gray-500 text-lg">أجمل الأصوات التي تلقي قصائد المنصة</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reciters.map(reciter => (
            <div key={reciter.id} className="glass-card rounded-2xl p-8 hover:border-accent-600/30 transition-all duration-300">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-700 to-accent-500 flex items-center justify-center text-2xl font-bold text-primary-950 mb-5 mx-auto">
                {reciter.name.charAt(0)}
              </div>
              <h3 className="font-heading text-xl text-accent-400 text-center mb-3">{reciter.name}</h3>
              <div className="text-gray-500 text-center text-sm mb-4">
                {reciter.poems.length} قصيدة
              </div>
              <div className="space-y-2">
                {reciter.poems.slice(0, 3).map((poem: string, i: number) => (
                  <div key={i} className="text-gray-400 text-sm text-center border-b border-white/5 pb-2 last:border-0">
                    {poem}
                  </div>
                ))}
                {reciter.poems.length > 3 && (
                  <div className="text-accent-600 text-xs text-center">
                    +{reciter.poems.length - 3} قصائد أخرى
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
