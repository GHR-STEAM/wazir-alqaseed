'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { categories as defaultCategories } from '@/data/poems'
import Toast from '@/components/Toast'

export default function ManageCategoriesPage() {
  const router = useRouter()
  const [cats, setCats] = useState(defaultCategories)
  const [toast, setToast] = useState<{msg:string;type:'success'|'error'} | null>(null)
  const [showAdd, setShowAdd] = useState(false)
  const [newCat, setNewCat] = useState({ name:'', icon:'📁', description:'' })

  useEffect(() => {
    if (!localStorage.getItem('_wz_user')) { router.push('/login'); return }
    const saved = localStorage.getItem('_wz_cats')
    if (saved) try { setCats(JSON.parse(saved)) } catch {}
  }, [router])

  const save = (updated: typeof cats) => {
    setCats(updated)
    localStorage.setItem('_wz_cats', JSON.stringify(updated))
  }

  const add = () => {
    if (!newCat.name.trim()) return
    const id = newCat.name.replace(/\s+/g, '-').toLowerCase()
    save([...cats, { id, name:newCat.name, icon:newCat.icon, description:newCat.description, poemsCount:0 }])
    setNewCat({ name:'', icon:'📁', description:'' })
    setShowAdd(false)
    setToast({ msg:'✅ تمت إضافة الفئة', type:'success' })
  }

  const del = (id: string) => {
    if (!confirm('⚠️ حذف الفئة؟')) return
    save(cats.filter(c => c.id !== id))
    setToast({ msg:'✅ تم حذف الفئة', type:'success' })
  }

  return (
    <div className="min-h-screen">
      {toast && <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
      <header className="bg-gradient-to-l from-[#1a140d] via-[#2a2015] to-[#1a140d] border-b-2 border-[#ca8a04]/30 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/dashboard" className="text-[#ca8a04] hover:text-[#fde047] text-sm transition-colors">← العودة</Link>
          <h1 className="font-heading text-xl text-[#ca8a04]">🏷️ إدارة الفئات</h1>
          <button onClick={() => setShowAdd(!showAdd)}
            className="px-3 py-1.5 bg-[#ca8a04] text-[#0a0804] rounded-lg text-sm font-semibold">+ إضافة</button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {showAdd && (
          <div className="card p-5 mb-6">
            <h3 className="font-heading text-base text-[#ca8a04] mb-3">إضافة فئة جديدة</h3>
            <div className="space-y-3">
              <input value={newCat.name} onChange={e => setNewCat({...newCat, name:e.target.value})}
                placeholder="اسم الفئة" className="w-full bg-[#0a0804] border border-[#ca8a04]/20 rounded-lg px-4 py-2 text-white" />
              <div className="flex gap-2">
                <input value={newCat.icon} onChange={e => setNewCat({...newCat, icon:e.target.value})}
                  placeholder="رمز" className="w-16 bg-[#0a0804] border border-[#ca8a04]/20 rounded-lg px-3 py-2 text-white text-center" />
                <input value={newCat.description} onChange={e => setNewCat({...newCat, description:e.target.value})}
                  placeholder="الوصف" className="flex-1 bg-[#0a0804] border border-[#ca8a04]/20 rounded-lg px-4 py-2 text-white" />
              </div>
              <button onClick={add} className="px-4 py-2 bg-[#ca8a04] text-[#0a0804] rounded-lg text-sm font-semibold">💾 حفظ</button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cats.map(cat => (
            <div key={cat.id} className="card p-5 relative group">
              <button onClick={() => del(cat.id)}
                className="absolute top-2 left-2 w-7 h-7 bg-red-900/20 text-red-400 border border-red-600 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity">✕</button>
              <div className="text-5xl mb-3">{cat.icon}</div>
              <h3 className="font-heading text-lg text-[#ca8a04] mb-2">{cat.name}</h3>
              <p className="text-sm text-[#8a7055] line-clamp-2 mb-3">{cat.description}</p>
              <p className="text-xs text-[#ca8a04] border-t border-[#2a2015] pt-3">{cat.poemsCount} قصيدة</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
