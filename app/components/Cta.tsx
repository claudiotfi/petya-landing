import { ArrowRight } from 'lucide-react';

export function Cta() {
    return (
        <section className="relative z-10 px-12 py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Pronto para transformar a saúde do seu pet?</h2>
            <p className="text-xl text-blue-100 mb-8">Seja um dos primeiros a usar Petya</p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all flex items-center gap-2 mx-auto">
                Entrar na lista de acesso antecipado <ArrowRight size={20} />
            </button>
        </section>
    )
}