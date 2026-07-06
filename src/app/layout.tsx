import type { Metadata } from 'next'
import { Tajawal, Scheherazade_New } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-tajawal',
})

const scheherazade = Scheherazade_New({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-scheherazade',
})

export const metadata: Metadata = {
  title: 'وزير القصيد - منصة الشعر النبطي الأصيل',
  description: 'منصة عصرية ومتطورة مخصصة للشعر النبطي الأصيل، توفر تجربة استماع ممتازة لأفضل القصائد والأصوات',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.variable} ${scheherazade.variable} font-arabic antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
