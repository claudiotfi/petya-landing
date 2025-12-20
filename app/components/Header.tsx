import { Heart } from 'lucide-react'

export function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between px-12 py-6 bg-white/80 backdrop-blur-sm border-b border-blue-100">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
          <Heart className="text-white" size={24} />
        </div>
        <span className="text-2xl font-bold text-blue-800">Petya</span>
      </div>

      <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
        Inscrever-se
      </button>
    </header>
  )
}
