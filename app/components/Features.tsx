import { Folder, Share2, ShieldCheck, Clock } from 'lucide-react'

export function Features() {
  return (
    <section className="py-32 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          Pensado para o cuidado contínuo do seu pet
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature
          icon={Folder}
          title="Tudo organizado"
          description="Todas as informações de saúde do seu pet organizadas em um único lugar."
          color="text-emerald-600"
        />

        <Feature
          icon={Share2}
          title="Compartilhável"
          description="Compartilhe o histórico com veterinários, hotéis ou cuidadores quando precisar."
          color="text-sky-600"
        />

        <Feature
          icon={ShieldCheck}
          title="Seguro"
          description="Seus dados protegidos com segurança e respeito à privacidade."
          color="text-orange-500"
        />

        <Feature
          icon={Clock}
          title="Sempre à mão"
          description="Acesse o histórico do seu pet a qualquer momento, direto do celular."
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
  description,
  color,
}: {
  icon: React.ElementType
  title: string
  description: string
  color: string
}) {
  return (
    <div className="p-8 rounded-3xl bg-slate-50 hover:bg-slate-100 transition">
      <Icon className={`w-10 h-10 ${color} mb-4`} />
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-slate-600">
        {description}
      </p>
    </div>
  )
}


