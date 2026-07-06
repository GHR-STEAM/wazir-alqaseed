'use client'
import { useState, useCallback, useEffect } from 'react'

const adhkar = [
  { id:'sbhan', text:'سبحان الله', count:33, icon:'🌙' },
  { id:'hamd', text:'الحمدلله', count:33, icon:'🌿' },
  { id:'akbar', text:'الله أكبر', count:34, icon:'✨' },
  { id:'tahlil', text:'لا إله إلا الله', count:100, icon:'🕋' },
  { id:'astghfar', text:'أستغفر الله', count:100, icon:'🤲' },
]

export default function AdhkarPage() {
  const [counters, setCounters] = useState<Record<string,{current:number;target:number}>>({})
  const [selected, setSelected] = useState('sbhan')

  useEffect(() => {
    const saved = localStorage.getItem('_wz_adhkar')
    if (saved) {
      try { setCounters(JSON.parse(saved)) } catch {}
    } else {
      const init:Record<string,{current:number;target:number}> = {}
      adhkar.forEach(a => { init[a.id] = { current:0, target:a.count } })
      setCounters(init)
    }
  }, [])

  useEffect(() => {
    if (Object.keys(counters).length > 0) {
      localStorage.setItem('_wz_adhkar', JSON.stringify(counters))
    }
  }, [counters])

  const increment = useCallback(() => {
    setCounters(prev => {
      const c = prev[selected]
      if (!c) return prev
      const next = c.current + 1
      const newC = { ...c, current: next > c.target ? 0 : next }
      const updated = { ...prev, [selected]: newC }
      return updated
    })
  }, [selected])

  const reset = useCallback(() => {
    setCounters(prev => {
      const updated = { ...prev }
      Object.keys(updated).forEach(k => { updated[k] = { ...updated[k], current:0 } })
      return updated
    })
  }, [])

  const resetOne = useCallback((id:string) => {
    setCounters(prev => ({ ...prev, [id]: { ...prev[id], current:0 } }))
  }, [])

  const current = counters[selected]
  const totalCurrent = Object.values(counters).reduce((s,c) => s + (c?.current || 0), 0)
  const totalTarget = Object.values(counters).reduce((s,c) => s + (c?.target || 0), 0)

  return (
    <div className="py-8 px-4 max-w-lg mx-auto">
      <div className="text-center mb-6">
        <span className="text-4xl block mb-2">🕌</span>
        <h1 className="font-heading text-3xl text-[#ca8a04]">الأذكار</h1>
        <div className="sand-divider" />
        <p className="text-sm text-[#8a7055]">سبحان الله وبحمده · سبحان الله العظيم</p>
      </div>

      {/* Dhikr selector */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {adhkar.map(a => (
          <button key={a.id} onClick={() => setSelected(a.id)}
            className={`px-4 py-2 rounded-full text-sm transition-all border ${
              selected === a.id
                ? 'bg-[#ca8a04]/20 border-[#ca8a04] text-[#ca8a04] shadow-lg shadow-[#ca8a04]/10'
                : 'bg-[#1a140d]/60 border-[#ca8a04]/15 text-[#c9b07a] hover:border-[#ca8a04]/30'
            }`}>
            {a.icon} {a.text}
          </button>
        ))}
      </div>

      {/* Main counter */}
      {current && (
        <div className="bg-gradient-to-b from-[#1a140d] to-[#0f0b06] border border-[#ca8a04]/20 rounded-2xl p-8 text-center mb-4 shadow-xl">
          <div className="text-5xl mb-3 opacity-70">
            {adhkar.find(a => a.id === selected)?.icon}
          </div>
          <h2 className="font-heading text-2xl text-[#e8d5a3] mb-2">
            {adhkar.find(a => a.id === selected)?.text}
          </h2>
          <div className="text-xs text-[#8a7055] mb-4">
            الهدف: {current.target.toLocaleString('ar-SA')}
          </div>

          <button onClick={increment}
            className="w-48 h-48 rounded-full bg-gradient-to-br from-[#ca8a04]/20 to-[#ca8a04]/5 border-4 border-[#ca8a04]/30
              flex flex-col items-center justify-center mx-auto mb-4
              active:scale-95 active:border-[#ca8a04]/50 transition-all duration-150
              hover:shadow-2xl hover:shadow-[#ca8a04]/20 hover:border-[#ca8a04]/40
              cursor-pointer select-none"
            style={{ WebkitTapHighlightColor: 'transparent' }}>
            <span className="font-heading text-6xl text-[#ca8a04] font-bold mb-2">
              {current.current.toLocaleString('ar-SA')}
            </span>
            <span className="text-xs text-[#8a7055]">اضغط للعد</span>
          </button>

          <div className="w-full bg-[#0a0804] rounded-full h-2 mb-1 overflow-hidden border border-[#ca8a04]/10">
            <div className="h-full bg-gradient-to-l from-[#ca8a04] to-[#fde047] rounded-full transition-all duration-200"
              style={{ width: `${Math.min(100, (current.current / current.target) * 100)}%` }} />
          </div>
          <div className="text-xs text-[#8a7055]">
            {Math.min(100, Math.round((current.current / current.target) * 100))}% مكتمل
          </div>
        </div>
      )}

      {/* Quick actions */}
      <div className="flex gap-2 justify-center mb-8">
        <button onClick={() => increment()}
          className="bg-[#ca8a04]/15 border border-[#ca8a04]/30 text-[#ca8a04] px-6 py-2 rounded-xl text-sm font-semibold hover:bg-[#ca8a04]/25 transition-colors">
          ➕ عد +١
        </button>
        <button onClick={() => resetOne(selected)}
          className="bg-[#3d2b1f]/40 border border-[#ca8a04]/15 text-[#c9b07a] px-4 py-2 rounded-xl text-sm hover:bg-[#3d2b1f]/60 transition-colors">
          🔄 إعادة
        </button>
        <button onClick={reset}
          className="bg-[#3d2b1f]/40 border border-[#ca8a04]/15 text-[#c9b07a] px-4 py-2 rounded-xl text-sm hover:bg-[#3d2b1f]/60 transition-colors">
          🔄 الكل
        </button>
      </div>

      {/* Total progress */}
      <div className="bg-[#1a140d]/50 border border-[#ca8a04]/10 rounded-xl p-4 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-[#8a7055]">المجموع الكلي</span>
          <span className="font-heading text-lg text-[#ca8a04]">
            {totalCurrent.toLocaleString('ar-SA')} / {totalTarget.toLocaleString('ar-SA')}
          </span>
        </div>
        <div className="w-full bg-[#0a0804] rounded-full h-1.5 overflow-hidden">
          <div className="h-full bg-gradient-to-l from-[#ca8a04] to-[#fde047] rounded-full transition-all duration-300"
            style={{ width: `${Math.min(100, (totalCurrent / totalTarget) * 100)}%` }} />
        </div>
      </div>

      {/* All dhikr progress */}
      <div className="space-y-2">
        {adhkar.map(a => {
          const c = counters[a.id]
          if (!c) return null
          return (
            <div key={a.id} onClick={() => { setSelected(a.id) }}
              className="bg-[#1a140d]/30 border border-[#ca8a04]/10 rounded-lg p-3 flex items-center justify-between cursor-pointer hover:border-[#ca8a04]/30 transition-colors">
              <div className="flex items-center gap-2">
                <span className="text-lg">{a.icon}</span>
                <span className="text-sm text-[#c9b07a]">{a.text}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-heading text-base text-[#ca8a04]">
                  {c.current.toLocaleString('ar-SA')}
                </span>
                <div className="w-20 bg-[#0a0804] rounded-full h-1.5 overflow-hidden">
                  <div className="h-full bg-gradient-to-l from-[#ca8a04]/60 to-[#ca8a04] rounded-full transition-all duration-200"
                    style={{ width: `${Math.min(100, (c.current / c.target) * 100)}%` }} />
                </div>
                <button onClick={(e) => { e.stopPropagation(); resetOne(a.id) }}
                  className="text-xs text-[#8a7055] hover:text-[#ca8a04] transition-colors">↺</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
