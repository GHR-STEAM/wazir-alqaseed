'use client'

import Link from 'next/link'
import { poems, categories, heroContent, taymaContent, mediaLinks, poetInfo } from '@/data/poems'
import PoemCard from '@/components/PoemCard'
import CategoryCard from '@/components/CategoryCard'

export default function HomePage() {
  const featured = poems.find(p => p.id === 'hanait') || poems[0]
  const recent = poems.slice(0, 4)
  const cats = categories

  return (
    <div>
      {/* Hero */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-20"
        style={{background:'radial-gradient(ellipse at 50% 30%, rgba(202,138,4,0.08), transparent 65%)'}}>
        <div className="text-3xl mb-3 opacity-80">🌙</div>
        <h1 className="font-heading text-5xl md:text-7xl text-[#ca8a04] mb-2"
          style={{textShadow:'0 0 40px rgba(202,138,4,0.3)'}}>{heroContent.title}</h1>
        <p className="font-heading text-lg text-[#c9b07a] italic opacity-80 mb-10">{heroContent.subtitle}</p>
        <div className="bg-[#3d2b1f]/60 border border-[#ca8a04]/20 rounded-xl px-6 py-5 max-w-md w-full backdrop-blur">
          <p className="font-heading text-xl text-[#e8d5a3] mb-1">{heroContent.poetName}</p>
          <p className="text-sm text-[#ca8a04] mb-2">{heroContent.poetTribe}</p>
          <p className="text-sm text-[#8a7055] leading-relaxed">{heroContent.poetBio}</p>
        </div>
      </section>

      {/* Dunes */}
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full block" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,60 C120,30 240,80 360,55 C480,30 600,75 720,50 C840,25 960,70 1080,45 C1200,20 1320,60 1440,40 L1440,90 L0,90 Z" fill="#1a140d"/>
        <path d="M0,70 C150,45 300,85 450,62 C600,39 750,78 900,58 C1050,38 1200,72 1440,55 L1440,90 L0,90 Z" fill="#150f08" opacity="0.85"/>
      </svg>

      {/* Featured Poem */}
      <section className="bg-[#1a140d]" id="poems">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="font-heading text-3xl text-[#ca8a04]">
            {featured.title}
          </h2>
          <div className="sand-divider" />
          <p className="text-sm text-[#8a7055] mb-8">{featured.poet} · الحنين والذكريات</p>
          <div className="bg-[#3d2b1f]/30 border border-[#ca8a04]/15 rounded-xl p-8">
            {featured.lines?.slice(0, 5).map((b, i) => (
              <div key={i} className="poetry-bayt mb-3">
                <span className="poetry-sadr text-[#e8d5a3]">{b[0]}</span>
                <span className="poetry-sep text-sm">•••</span>
                <span className="poetry-ajz text-[#c9b07a]">{b[1]}</span>
              </div>
            ))}
            <Link href={`/poems/${featured.id}`} className="btn-primary inline-block mt-6 text-sm">
              اقرأ القصيدة كاملة 📖
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl text-[#ca8a04] text-center mb-8">فئات الشعر</h2>
        <div className="sand-divider" />
        <p className="text-sm text-[#8a7055] text-center mb-10">استكشف أنواع الشعر النبطي المختلفة</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cats.map(cat => <CategoryCard key={cat.id} cat={cat} />)}
        </div>
      </section>

      {/* Recent Poems */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl text-[#ca8a04] text-center mb-8">أحدث القصائد</h2>
        <div className="sand-divider" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {recent.map(p => <PoemCard key={p.id} poem={p} />)}
        </div>
      </section>

      {/* Media Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto" id="media">
        <h2 className="font-heading text-3xl text-[#ca8a04] text-center mb-2">مرئيات</h2>
        <div className="sand-divider" />
        <p className="text-sm text-[#8a7055] text-center mb-8">مقاطع الشعراء على السوشيال ميديا</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {mediaLinks.anaad.map((m,i) => {
            const vid = (m as any).vid
            return (
            <a key={i} href={(m as any).url || (vid ? `https://www.youtube.com/watch?v=${vid}` : '#')} target="_blank" rel="noopener noreferrer"
              className="card overflow-hidden block group">
              <div className="relative aspect-video bg-[#0a0804]">
                {vid ? (
                  <img src={`https://img.youtube.com/vi/${vid}/hqdefault.jpg`} alt={m.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-20">{m.platform === 'tiktok' ? '♪' : '▶'}</div>
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur border-2 border-white/40 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">▶</div>
                </div>
              </div>
              <div className="p-3">
                <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded mb-2 ${m.platform==='youtube'?'bg-red-600 text-white':m.platform==='tiktok'?'bg-black text-[#69C9D0] border border-gray-700':''}`}>
                  {m.platform === 'youtube' ? '▶ YOUTUBE' : m.platform === 'tiktok' ? '♪ TIKTOK' : m.platform.toUpperCase()}
                </span>
                <p className="font-heading text-sm text-[#e8d5a3]">{m.title}</p>
              </div>
            </a>
            )})}
        </div>

        <a href="https://www.youtube.com/results?search_query=عايد+بن+ضافي+الجلوي" target="_blank"
          className="block text-center text-sm text-[#8a7055] hover:text-[#ca8a04] transition-colors">
          🔍 روابط البحث في يوتيوب عن قصائد عايد الجلوي رحمه الله
        </a>
      </section>

      {/* Media Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto" id="media">
        <h2 className="font-heading text-3xl text-[#ca8a04] text-center mb-2">مرئيات</h2>
        <div className="sand-divider" />
        <p className="text-sm text-[#8a7055] text-center mb-8">مقاطع الشعراء على السوشيال ميديا</p>

        <div className="flex justify-center gap-3 flex-wrap mb-8">
          {['عناد سابل العنزي','عايد بن ضافي الجلوي'].map((name,i) => (
            <button key={i} onClick={() => {
              document.querySelectorAll('#media .media-btn').forEach(b => b.classList.remove('bg-[#ca8a04]/20','border-[#ca8a04]','text-[#ca8a04]'))
              document.getElementById('media-btn-'+i)?.classList.add('bg-[#ca8a04]/20','border-[#ca8a04]','text-[#ca8a04]')
              document.getElementById('media-list-0')!.style.display = i===0 ? 'grid' : 'none'
              document.getElementById('media-list-1')!.style.display = i===1 ? 'grid' : 'none'
            }}
              id={`media-btn-${i}`}
              className={`media-btn px-5 py-2 rounded-full text-sm font-semibold border transition-all ${i===0?'bg-[#ca8a04]/20 border-[#ca8a04] text-[#ca8a04]':'bg-[#3d2b1f]/40 border-[#ca8a04]/20 text-[#c9b07a]'}`}>
              {name}
            </button>
          ))}
        </div>

        {[mediaLinks.anaad, mediaLinks.ayed].map((list,idx) => (
          <div key={idx} id={`media-list-${idx}`} className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{display:idx===0?'grid':'none'}}>
            {list.map((m,i) => (
              <a key={i} href={m.url || `https://www.youtube.com/watch?v=${m.vid}`} target="_blank" rel="noopener noreferrer"
                className="card overflow-hidden block group">
                <div className="relative aspect-video bg-[#0a0804] overflow-hidden">
                  {m.vid ? (
                    <img src={`https://img.youtube.com/vi/${m.vid}/hqdefault.jpg`} alt={m.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-20">▶</div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur border-2 border-white/40 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">▶</div>
                  </div>
                </div>
                <div className="p-3">
                  <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded mb-2 ${m.platform==='youtube'?'bg-red-600 text-white':m.platform==='tiktok'?'bg-black text-[#69C9D0] border border-gray-700':''}`}>
                    {m.platform === 'youtube' ? '▶ YOUTUBE' : m.platform === 'tiktok' ? '♪ TIKTOK' : m.platform.toUpperCase()}
                  </span>
                  <p className="font-heading text-sm text-[#e8d5a3]">{m.title}</p>
                </div>
              </a>
            ))}
          </div>
        ))}

        <p className="text-center text-sm text-[#8a7055] mt-6">
          🔍 روابط البحث في يوتيوب عن قصائد عايد الجلوي رحمه الله
        </p>
      </section>

      {/* Taima Section */}
      <section className="py-16 px-4 bg-[#3d2b1f]/20 border-y border-[#ca8a04]/10" id="tayma">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl text-[#ca8a04]">{taymaContent.title}</h2>
          <div className="sand-divider" />
          <p className="text-sm text-[#8a7055] mb-8">{taymaContent.subtitle}</p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {taymaContent.stats.map((s,i) => (
              <div key={i} className="bg-[#ca8a04]/10 border border-[#ca8a04]/20 rounded-lg px-4 py-3 min-w-[90px]">
                <div className="font-heading text-2xl text-[#ca8a04]">{s.num}</div>
                <div className="text-xs text-[#8a7055]">{s.label}</div>
              </div>
            ))}
          </div>

          <p className="font-heading text-base text-[#c9b07a] leading-relaxed mb-8">{taymaContent.intro}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right mb-8">
            {taymaContent.cards.map((c,i) => (
              <div key={i} className="bg-[#1a140d]/60 border border-[#ca8a04]/15 rounded-lg p-4">
                <span className="text-2xl block mb-2">{c.icon}</span>
                <h4 className="font-heading text-base text-[#ca8a04] mb-2">{c.title}</h4>
                <p className="text-sm text-[#c9b07a] opacity-90 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#ca8a04]/5 border border-[#ca8a04]/20 rounded-lg p-4 mb-8">
            <div className="text-xs text-[#ca8a04] mb-2">مثل عربي</div>
            <div className="font-heading text-base text-[#e8d5a3]">مثل هداج تيماء · لا يملّ ولا ينضب</div>
          </div>

          <h3 className="font-heading text-xl text-[#ca8a04] mb-6 pb-2 border-b border-[#ca8a04]/20">هداج في الشعر</h3>
          <div className="space-y-3">
            {taymaContent.verses.map((v,i) => (
              <div key={i} className="bg-[#3d2b1f]/30 border-r-3 border-[#ca8a04] rounded-r-lg p-3 text-right"
                style={{borderRightWidth:'3px'}}>
                <div className="font-heading text-base text-[#e8d5a3] leading-relaxed mb-1">{v.text}</div>
                <div className="text-xs text-[#ca8a04] opacity-80">{v.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poets Info */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl text-[#ca8a04] text-center mb-8">عن الشعراء</h2>
        <div className="sand-divider" />
        {poetInfo.map((p,i) => (
          <div key={i} className="mb-6 pb-6 border-b border-[#ca8a04]/10 last:border-0">
            <h3 className="font-heading text-lg text-[#ca8a04] mb-3">{p.name}</h3>
            <p className="text-sm text-[#c9b07a] leading-relaxed">{p.text}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
