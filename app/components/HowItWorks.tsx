import { Cat, FileText, Share2 } from 'lucide-react'

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-32 bg-gradient-to-b from-slate-300 via-white to-slate-300"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Como o Petya facilita o cuidado com seu pet
        </h2>

        <p className="text-slate-600 max-w-2xl mx-auto mb-20 text-lg">
          Em poucos passos, você organiza o histórico de saúde do seu pet e tem tudo pronto quando precisar.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          <Step
            icon={Cat}
            title="Cadastre seu pet"
            text="Cadastre seu pet em menos de 1 minuto com as informações essenciais."
            color="text-yellow-600"
          />
          <Step
            icon={FileText}
            title="Guarde o histórico veterinário"
            text="Guarde vacinas, exames e receitas de forma organizada e fácil de consultar."
            color="text-sky-600"
          />
          <Step
            icon={Share2}
            title="Compartilhe quando precisar"
            text="Compartilhe o histórico com o veterinário em segundos, direto do celular."
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
