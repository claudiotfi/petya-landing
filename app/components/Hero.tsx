import { Heart, Share2, FileText, ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative z-10 px-12 py-20 grid grid-cols-2 gap-12 items-center">
            <div>
                <div className="inline-block px-4 py-2 bg-blue-200 text-blue-600 rounded-full text-sm font-semibold mb-6">
                    🐾 Saúde do seu pet centralizada
                </div>
                <h1 className="text-6xl font-bold mb-6 leading-tight text-black">
                    <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Organize todo o histórico de saúde do seu pet em um só lugar</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Vacinas, exames, documentos e histórico clínico sempre à mão. Compartilhe com veterinários quando precisar. Nunca mais perca informações importantes.
                </p>
                <div className="flex gap-4">
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all flex items-center gap-2">
                        Entrar na lista <ArrowRight size={20} />
                    </button>
                    <button className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all">
                        Saiba mais
                    </button>
                </div>
            </div>

            {/* Cards em coluna */}
            <div className="space-y-4">
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group flex items-start gap-4">
                    <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl p-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <FileText className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Vacinas, exames e documentos</h3>
                        <p className="text-gray-600">Acesso instantâneo ao histórico completo do seu pet</p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group flex items-start gap-4">
                    <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl p-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Share2 className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Compartilhe com veterinários</h3>
                        <p className="text-gray-600">Facilite consultas e emergências com informações completas</p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group flex items-start gap-4">
                    <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl p-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Heart className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Nunca perca informações</h3>
                        <p className="text-gray-600">Tudo seguro e organizado em um único lugar</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
