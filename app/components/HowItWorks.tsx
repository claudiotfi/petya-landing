import { Cat, FileText, Share2 } from 'lucide-react'

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-32 bg-gradient-to-b from-slate-300 via-white to-slate-300"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Como funciona
        </h2>

        <p className="text-slate-600 max-w-2xl mx-auto mb-20 text-lg">
          Organize o histórico de saúde do seu pet em poucos passos,
          de forma simples e segura.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          <Step
            icon={Cat}
            title="Cadastre seu pet"
            text="Nome, espécie, raça e informações básicas."
            color="text-yellow-600"
          />
          <Step
            icon={FileText}
            title="Guarde o histórico"
            text="Vacinas, exames e documentos organizados."
            color="text-sky-600"
          />
          <Step
            icon={Share2}
            title="Compartilhe quando precisar"
            text="Envie o histórico ao veterinário em segundos."
            color="text-teal-600"
          />
        </div>
      </div>
    </section>
  )
}

function Step({
  icon: Icon,
  title,
  text,
  color,
}: {
  icon: React.ElementType
  title: string
  text: string
  color: string
}) {
  return (
    <div className="flex flex-col items-center text-center px-6">
      <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-2xl bg-slate-100">
        <Icon className={`w-16 h-16 ${color}`} />
      </div>

      <h3 className="font-bold text-xl mb-3">
        {title}
      </h3>

      <p className="text-slate-600 leading-relaxed">
        {text}
      </p>
    </div>
  )
}
