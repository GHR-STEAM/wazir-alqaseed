export default function Footer() {
  return (
    <footer className="border-t border-[#ca8a04]/15 py-8 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <span className="font-heading text-xl text-[#ca8a04] block mb-2">⚗ وزير القصيد</span>
        <p className="text-[#8a7055] text-sm">موقع الشعر النبطي والبادية · من تيماء بخير</p>
        <p className="text-[#8a7055] text-xs mt-3">جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
