export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl text-accent-400 mb-4">عن المنصة</h1>
          <p className="text-gray-500 text-lg">منصة الشعر النبطي الأصيل</p>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-12 mb-8">
          <h2 className="font-heading text-2xl text-accent-400 mb-6">قصتنا</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            وزير القصيد منصة متخصصة في الشعر النبطي الأصيل، تأسست بهدف الحفاظ على هذا التراث الأدبي العريق وتقديمه بأسلوب عصري يناسب الجيل الجديد.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            نؤمن بأن الشعر النبطي جزء لا يتجزأ من هويتنا الثقافية، ونسعى من خلال منصتنا إلى توفير بيئة مثالية لعشاق الكلمة الجميلة، حيث يمكنهم الاستماع إلى أجمل القصائد بأصوات أروع المقرئين.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { title: 'رسالتنا', desc: 'الحفاظ على التراث الشعري النبطي وتقديمه بأسلوب عصري' },
            { title: 'رؤيتنا', desc: 'أن نكون المنصة الأولى للشعر النبطي في العالم العربي' },
            { title: 'قيمنا', desc: 'الأصالة، الجودة، الابتكار، والاحترام للتراث' },
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-2xl p-8 text-center">
              <h3 className="font-heading text-xl text-accent-400 mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-heading text-2xl text-accent-400 mb-4">تواصل معنا</h2>
          <p className="text-gray-400 mb-6">للاستفسارات والاقتراحات</p>
          <a href="mailto:info@alqaseed.com" className="text-accent-500 hover:text-accent-400 transition-colors underline underline-offset-4">
            info@alqaseed.com
          </a>
        </div>
      </div>
    </div>
  )
}
