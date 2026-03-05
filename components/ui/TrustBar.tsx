export function TrustBar() {
  return (
    <div className="bg-[#1d110c] py-3 overflow-hidden">
      <div className="flex items-center justify-center gap-6 sm:gap-10 text-white/80 text-xs sm:text-sm font-medium">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="material-symbols-outlined text-green-400" style={{fontSize: '16px', fontVariationSettings: "'FILL' 1"}}>verified</span>
          <span>Entradas 100% Verificadas</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 shrink-0">
          <span className="material-symbols-outlined text-blue-400" style={{fontSize: '16px', fontVariationSettings: "'FILL' 1"}}>smartphone</span>
          <span>Transferencia Oficial por App</span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="material-symbols-outlined text-yellow-400" style={{fontSize: '16px', fontVariationSettings: "'FILL' 1"}}>shield</span>
          <span>Garantía de Autenticidad</span>
        </div>
        <div className="hidden md:flex items-center gap-1.5 shrink-0">
          <span className="material-symbols-outlined text-purple-400" style={{fontSize: '16px', fontVariationSettings: "'FILL' 1"}}>support_agent</span>
          <span>Atención en Español</span>
        </div>
      </div>
    </div>
  )
}
