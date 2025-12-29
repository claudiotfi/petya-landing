'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  NotebookTabs,
  Check,
  Loader2,
  Syringe,
  FileText,
  Pill,
} from 'lucide-react'

type Item = {
  id: number
  icon: React.ReactNode
  title: string
  subtitle: string
}

const MOCK_ITEMS: Item[] = [
  {
    id: 1,
    icon: <Pill className="w-6 h-6 text-yellow-500" />,
    title: 'Medicação contínua',
    subtitle: 'Uso diário',
  },
  {
    id: 2,
    icon: <FileText className="w-6 h-6 text-cyan-600" />,
    title: 'Exame de sangue',
    subtitle: 'Resultado anexado',
  },
  {
    id: 3,
    icon: <Syringe className="w-6 h-6 text-emerald-600" />,
    title: 'Vacina V10',
    subtitle: 'Aplicada há 3 meses',
  },
]

type Status = 'loading' | 'animating' | 'done'

export function PetHistoryMock() {
  const [status, setStatus] = useState<Status>('loading')
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    let mounted = true

    const wait = (ms: number) =>
      new Promise(resolve => setTimeout(resolve, ms))

    const runAnimation = async () => {
      while (mounted) {
        // RESET
        setStatus('loading')
        setItems([])
        await wait(1200)

        // ENTRADA DOS ITENS
        setStatus('animating')

        for (const item of MOCK_ITEMS) {
          if (!mounted) return
          setItems(prev => [item, ...prev])
          await wait(600)
        }

        // FINALIZADO
        setStatus('done')
        await wait(3000)
      }
    }

    runAnimation()

    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className="relative my-6">
      <motion.div
        layout
        className="rounded-3xl bg-white shadow-2xl p-8 border border-slate-200"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <p className="font-semibold text-slate-700 flex items-center">
            <NotebookTabs className="w-5 h-5 me-2" />
            Histórico do Pet
          </p>

          <motion.span
            key={status}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className={`text-sm font-semibold flex items-center ${
              status === 'done'
                ? 'text-emerald-600'
                : 'text-rose-500'
            }`}
          >
            {status === 'done' ? (
              <>
                Atualizado <Check className="w-4 h-4 ms-1" />
              </>
            ) : (
              <>
                Atualizando
                <Loader2 className="w-4 h-4 ms-2 animate-spin" />
              </>
            )}
          </motion.span>
        </div>

        {/* LISTA */}
        <div className="space-y-4 h-[260px] overflow-hidden">
          <AnimatePresence>
            {items.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{
                  opacity: 0,
                  filter: 'blur(6px)',
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeOut',
                }}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50"
              >
                {item.icon}
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-slate-500">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
