import { Folder, Share2, ShieldCheck, Clock } from 'lucide-react'

export function Features() {
  return (
    <section className="py-32 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          Pensado para o cuidado contínuo
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature
            icon={Folder}
            title="Tudo organizado"
            color="text-emerald-600"
          />
          <Feature
            icon={Share2}
            title="Compartilhável"
            color="text-sky-600"
          />
          <Feature
            icon={ShieldCheck}
            title="Seguro"
            color="text-orange-500"
          />
          <Feature
            icon={Clock}
            title="Sempre à mão"
            color="text-indigo-600"
          />
        </div>
      </div>
    </section>
  )
}

function Feature({
  icon: Icon,
  title,
  color,
}: {
  icon: React.ElementType
  title: string
  color: string
}) {
  return (
    <div className="p-8 rounded-3xl bg-slate-50 hover:bg-slate-100 transition">
      <Icon className={`w-10 h-10 ${color} mb-4`} />
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-slate-600">
        Informações claras e acessíveis.
      </p>
    </div>
  )
}

