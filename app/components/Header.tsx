import { PawPrint } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-500
                      flex items-center justify-center text-white
                      hover:scale-105 transition"
            aria-label="Voltar ao topo"
          >
            <PawPrint size={28} />
          </a>
          <div className="leading-tight">
            <p className="text-xl font-extrabold text-emerald-700">Petya</p>
            <p className="text-sm text-slate-500">Saúde do seu pet</p>
          </div>
        </div>
        <a href="#waiting-list" className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-sky-600 text-white font-semibold hover:scale-105 transition">
          Entrar na lista
        </a>
      </div>
    </header>
  )
}
