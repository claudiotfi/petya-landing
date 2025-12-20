
import { Heart, Share2, FileText, Clock, Shield, Zap } from 'lucide-react';

export function Features() {
    return (
        <section className="relative z-10 px-12 py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <h2 className="text-4xl font-bold text-center mb-12">Por que escolher Petya</h2>
            <div className="grid grid-cols-3 gap-8">
                {[
                    { icon: FileText, title: 'Histórico Completo', desc: 'Vacinas, exames e documentos em um único lugar', color: 'from-blue-500 to-cyan-500' },
                    { icon: Share2, title: 'Compartilhamento Fácil', desc: 'Envie histórico para veterinários em segundos', color: 'from-amber-500 to-orange-500' },
                    { icon: Shield, title: 'Seguro e Confiável', desc: 'Seus dados protegidos com encriptação', color: 'from-blue-500 to-cyan-500' },
                    { icon: Clock, title: 'Acesso Rápido', desc: 'Informações sempre à mão em emergências', color: 'from-violet-500 to-purple-600' },
                    { icon: Zap, title: 'Fácil de Usar', desc: 'Interface intuitiva sem complicações', color: 'from-amber-500 to-orange-500' },
                    { icon: Heart, title: 'Saúde Melhor', desc: 'Histórico organizado = melhor cuidado', color: 'from-blue-500 to-cyan-500' }
                ].map((feature, i) => (
                    <div key={i} className="bg-white rounded-2xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                        <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            <feature.icon className="text-white" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-gray-600">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
