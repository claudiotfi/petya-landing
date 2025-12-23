import {
  HeartPulse,
  Syringe,
  FileText,
  Pill,
  NotebookTabs,
  Check,
} from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden text-slate-900" id="hero">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Texto principal */}
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-emerald-600 font-semibold mb-6 shadow-sm">
            <HeartPulse className="w-4 h-4 text-emerald-600" />
            Saúde veterinária organizada
          </span>

          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            O histórico de saúde do seu pet, &nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-600">
              sempre acessível
            </span>
          </h1>

          <p className="text-xl text-slate-600 mb-10">
            Centralize vacinas, exames, documentos e procedimentos.
            Tenha tudo à mão em consultas ou emergências.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#waiting-list" className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-center text-white font-bold text-lg hover:scale-105 transition">
              Quero acesso antecipado
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 rounded-full border border-slate-400 text-slate-700 font-semibold hover:border-sky-600 hover:text-sky-800 transition inline-flex items-center justify-center"
            >Como funciona</a>
          </div>
        </div>

        {/* Visual mock */}
        <div className="relative my-6">
          <div className="rounded-3xl bg-white shadow-2xl p-8 border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <p className="font-semibold text-slate-700 flex">
                <NotebookTabs className="w-5 h-5 me-2" /> Histórico do Pet
              </p>
              <span className="text-sm text-emerald-600 font-semibold flex">
                Atualizado <Check className="w-4 h-5 ms-1" />
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
                <Syringe className="w-6 h-6 text-emerald-600" />
                <div>
                  <p className="font-semibold">Vacina V10</p>
                  <p className="text-sm text-slate-500">
                    Aplicada há 3 meses
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
                <FileText className="w-6 h-6 text-cyan-600" />
                <div>
                  <p className="font-semibold">Exame de sangue</p>
                  <p className="text-sm text-slate-500">
                    Resultado anexado
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
                <Pill className="w-6 h-6 text-yellow-500" />
                <div>
                  <p className="font-semibold">Medicação contínua</p>
                  <p className="text-sm text-slate-500">
                    Uso diário
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
