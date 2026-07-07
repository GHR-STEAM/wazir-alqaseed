'use client'
import { useEffect } from 'react'

export default function Toast({ msg, type, onClose }: { msg:string; type:'success'|'error'; onClose:()=>void }) {
  useEffect(() => { const t = setTimeout(onClose, 2500); return () => clearTimeout(t) }, [onClose])
  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl text-sm font-semibold shadow-2xl fade-up ${
      type === 'success' ? 'bg-[#ca8a04] text-[#0a0804]' : 'bg-red-800 text-red-200 border border-red-600'
    }`}>
      {msg}
    </div>
  )
}
