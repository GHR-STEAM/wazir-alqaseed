import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-primary-950">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-xl text-accent-500 mb-4">وزير القصيد</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              منصة الشعر النبطي الأصيل. نحتفي بالكلمة الجميلة ونقدمها بأجمل الأصوات.
            </p>
          </div>
          <div>
            <h4 className="text-accent-400 mb-4 text-sm font-bold">روابط سريعة</h4>
            <div className="flex flex-col gap-2">
              {[
                { href: '/', label: 'الرئيسية' },
                { href: '/categories', label: 'التصنيفات' },
                { href: '/reciters', label: 'المقرئون' },
              ].map(link => (
                <Link key={link.href} href={link.href} className="text-gray-500 hover:text-accent-400 transition-colors text-sm">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-accent-400 mb-4 text-sm font-bold">عن المنصة</h4>
            <div className="flex flex-col gap-2">
              {[
                { href: '/about', label: 'عن الوزير' },
              ].map(link => (
                <Link key={link.href} href={link.href} className="text-gray-500 hover:text-accent-400 transition-colors text-sm">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-accent-400 mb-4 text-sm font-bold">تواصل</h4>
            <div className="text-gray-500 text-sm space-y-2">
              <p>info@alqaseed.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            جميع الحقوق محفوظة © {new Date().getFullYear()} وزير القصيد
          </p>
        </div>
      </div>
    </footer>
  )
}
