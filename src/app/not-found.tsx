import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-heading text-accent-600/30 mb-6">404</div>
        <h1 className="font-heading text-3xl text-accent-400 mb-4">الصفحة غير موجودة</h1>
        <p className="text-gray-500 mb-8">عذراً، الصفحة التي تبحث عنها غير متوفرة</p>
        <Link href="/" className="inline-block px-8 py-4 bg-accent-600 hover:bg-accent-500 text-primary-950 font-bold rounded-xl transition-all duration-300">
          العودة للرئيسية
        </Link>
      </div>
    </div>
  )
}
