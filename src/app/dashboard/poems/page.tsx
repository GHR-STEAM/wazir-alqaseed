'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { poems as defaultPoems, categories } from '@/data/poems'
import Toast from '@/components/Toast'

export default function ManagePoemsPage() {
  const router = useRouter()
  const [poems, setPoems] = useState(defaultPoems)
  const [search, setSearch] = useState('')
  const [toast, setToast] = useState<{msg:string;type:'success'|'error'} | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editData, setEditData] = useState({ title:'', poet:'', category:'', text:'', lines:'' })

  useEffect(() => {
    const user = localStorage.getItem('_wz_user')
    if (!user) { router.push('/login'); return }
    const saved = localStorage.getItem('_wz_poems')
    if (saved) try { setPoems(JSON.parse(saved)) } catch {}
  }, [router])

  const save = (updated: typeof poems) => {
    setPoems(updated)
    localStorage.setItem('_wz_poems', JSON.stringify(updated))
  }

  const del = (id: string) => {
    if (!confirm('⚠️ حذف القصيدة؟')) return
    save(poems.filter(p => p.id !== id))
    setToast({ msg:'✅ تم حذف القصيدة', type:'success' })
  }

  const startEdit = (p: typeof poems[0]) => {
    setEditingId(p.id)
    setEditData({
      title: p.title,
      poet: p.poet,
      category: p.category,
      text: p.text || '',
      lines: p.lines ? p.lines.map(l => l.join(' · ')).join('\n') : ''
    })
  }

  const saveEdit = () => {
    if (!editingId || !editData.title.trim()) return
    const updated = poems.map(p => {
      if (p.id !== editingId) return p
      const lines = editData.lines.trim()
        ? editData.lines.split('\n').filter(l => l.includes('·')).map(l => {
            const [s, a] = l.split('·').map(x => x.trim())
            return [s || '', a || ''] as [string, string]
          })
        : undefined
      return { ...p, title: editData.title, poet: editData.poet, category: editData.category, text: editData.text || undefined, lines }
    })
    save(updated)
    setEditingId(null)
    setToast({ msg:'✅ تم حفظ التعديل', type:'success' })
  }

  const filtered = poems.filter(p =>
    p.title.includes(search) || p.poet.includes(search)
  )

  return (
    <div className="min-h-screen">
      {toast && <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
      <header className="bg-gradient-to-l from-[#1a140d] via-[#2a2015] to-[#1a140d] border-b-2 border-[#ca8a04]/30 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/dashboard" className="text-[#ca8a04] hover:text-[#fde047] text-sm transition-colors">← العودة</Link>
          <h1 className="font-heading text-xl text-[#ca8a04]">📝 إدارة القصائد</h1>
          <div className="w-16" />
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-3 mb-6">
          <input type="text" placeholder="ابحث عن قصيدة..."
            value={search} onChange={e => setSearch(e.target.value)}
            className="flex-1 bg-[#0a0804] border border-[#ca8a04]/20 rounded-lg px-4 py-2 text-white focus:border-[#ca8a04] outline-none" />
        </div>

        <div className="space-y-3">
          {filtered.map(p => (
            <div key={p.id} className="card p-5">
              {editingId === p.id ? (
                <div className="space-y-3">
                  <input value={editData.title} onChange={e => setEditData({...editData, title:e.target.value})}
                    className="w-full bg-[#0a0804] border border-[#ca8a04]/20 rounded-lg px-4 py-2 text-white text-lg font-heading" />
                  <div className="flex gap-2">
                    <input value={editData.poet} onChange={e => setEditData({...editData, poet:e.target.value})}
                      className="flex-1 bg-[#0a0804] border border-[#ca8a04]/20 rounded-lg px-4 py-2 text-white text-sm" placeholder="الشاعر" />
                    <select value={editData.category} onChange={e => setEditData({...editData, category:e.target.value})}
                      className="bg-[#0a0804] border border-[#ca8a04]/20 rounded-lg px-4 py-2 text-white text-sm">
                      {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                  </div>
                  <textarea value={editData.lines} onChange={e => setEditData({...editData, lines:e.target.value})}
                    className="w-full bg-[#0a0804] border border-[#ca8a04]/20 rounded-lg px-4 py-2 text-white text-sm h-24 font-heading"
                    placeholder="الأبيات: صدر · عجز (كل بيت بسطر)" />
                  <div className="flex gap-2">
                    <button onClick={saveEdit} className="px-4 py-2 bg-[#ca8a04] text-[#0a0804] rounded-lg text-sm font-semibold">💾 حفظ</button>
                    <button onClick={() => setEditingId(null)} className="px-4 py-2 bg-[#3d2b1f]/40 text-[#c9b07a] rounded-lg text-sm">إلغاء</button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading text-lg text-[#ca8a04] mb-1">{p.title}</h3>
                    <p className="text-xs text-[#8a7055] mb-2">للشاعر: {p.poet}</p>
                    <div className="flex gap-2 text-xs">
                      <span className="bg-[#ca8a04]/10 text-[#ca8a04] px-2 py-0.5 rounded">{p.category}</span>
                      <span className="text-[#8a7055]">🎤 {p.reciters.length} منشد</span>
                      <span className="text-[#8a7055]">{p.lines?.length || (p.text ? 'نص حر' : '0')} بيت</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => startEdit(p)}
                      className="px-3 py-2 bg-[#ca8a04] text-[#0a0804] rounded-lg text-sm font-semibold hover:bg-[#d49a11] transition-colors">✏️</button>
                    <button onClick={() => del(p.id)}
                      className="px-3 py-2 bg-red-900/20 text-red-400 border border-red-600 rounded-lg text-sm hover:bg-red-900/40 transition-colors">🗑️</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[#8a7055] py-12">لا توجد نتائج</p>
        )}
      </div>
    </div>
  )
}
