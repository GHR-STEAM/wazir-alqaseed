'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('admin@wazir.com')
  const [password, setPassword] = useState('admin123')
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email === 'admin@wazir.com' && password === 'admin123') {
      localStorage.setItem('_wz_user', JSON.stringify({ name:'المشرف', email }))
      localStorage.setItem('_wz_token', 'admin-token-' + Date.now())
      router.push('/dashboard')
    } else {
      setError('البريد الإلكتروني أو كلمة المرور غير صحيحة')
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="card p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="text-4xl mb-3">🔐</div>
          <h1 className="font-heading text-3xl text-[#ca8a04]">دخول المشرف</h1>
          <p className="text-sm text-[#8a7055] mt-2">لوحة تحكم وزير القصيد</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-[#c9b07a] mb-1">البريد الإلكتروني</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
              className="w-full bg-[#0a0804] border border-[#ca8a04]/20 rounded-lg px-4 py-3 text-white focus:border-[#ca8a04] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm text-[#c9b07a] mb-1">كلمة المرور</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}
              className="w-full bg-[#0a0804] border border-[#ca8a04]/20 rounded-lg px-4 py-3 text-white focus:border-[#ca8a04] outline-none transition-colors" />
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <button type="submit" className="btn-primary w-full text-center">دخول</button>
        </form>

        <p className="text-xs text-[#8a7055] text-center mt-6">
          بيانات التجربة: admin@wazir.com / admin123
        </p>
      </div>
    </div>
  )
}
