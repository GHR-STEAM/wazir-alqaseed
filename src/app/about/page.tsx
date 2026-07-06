import { poetInfo, taymaContent } from '@/data/poems'

export default function AboutPage() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="font-heading text-4xl text-[#ca8a04] text-center mb-2">عن الشعراء</h1>
      <div className="sand-divider" />

      <div className="mb-10">
        <h2 className="font-heading text-2xl text-[#ca8a04] mb-6 pb-2 border-b border-[#ca8a04]/15">الشعراء</h2>
        {poetInfo.map((p,i) => (
          <div key={i} className="mb-6 pb-6 border-b border-[#ca8a04]/10 last:border-0">
            <h3 className="font-heading text-lg text-[#ca8a04] mb-3">{p.name}</h3>
            <p className="text-sm text-[#c9b07a] leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="font-heading text-2xl text-[#ca8a04] mb-6 pb-2 border-b border-[#ca8a04]/15">عن الموقع</h2>
        <p className="text-sm text-[#c9b07a] leading-relaxed mb-4">
          موقع <strong>وزير القصيد</strong> متخصص في الشعر النبطي الأصيل، يهدف إلى حفظ ونشر إرث الشعراء النبطيين.
        </p>
        <p className="text-sm text-[#c9b07a] leading-relaxed mb-4">
          ينطلق الموقع من تيماء، الواحة العريقة في شمال المملكة العربية السعودية، التي أنجبت شعراء كباراً
          وروت بئر هداج العطشى عبر آلاف السنين.
        </p>
        <p className="text-sm text-[#c9b07a] leading-relaxed">
          {taymaContent.intro}
        </p>
      </div>
    </div>
  )
}
