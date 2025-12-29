'use client'

import { useEffect, useRef, useState } from 'react'

const ENDPOINT = 'https://formspree.io/f/xykylnae'

export function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null)

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [showForm, setShowForm] = useState(true)

  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    if (!showForm) {
      setCountdown(10)

      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            resetFlow()
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [showForm])

  function resetFlow() {
    setShowForm(true)
    setSuccess(false)
    setError(false)
    setEmail('')
    setMessage('')
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError(false)

    try {
      if (!formRef.current) return

      const formData = new FormData(formRef.current)

      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })

      const data = await res.json()

      if (!res.ok) {
        console.error('Formspree error:', data)
        setError(true)
      } else {
        setSuccess(true)
      }

      setShowForm(false)
    } catch (err) {
      console.error(err)
      setError(true)
      setShowForm(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="waiting-list"
      className="bg-gradient-to-b from-slate-300 to-white"
    >
      <div className="max-w-4xl mx-auto text-center py-32 px-6">

        <h2 className="text-4xl font-extrabold text-center mb-6">Seja um dos primeiros a usar o Petya</h2>
        <p className="text-lg text-slate-600 mb-10">
            Cadastre-se para testar o Petya antes do lançamento e nunca mais perder informações importantes sobre a saúde do seu pet.
            <br/>Sem spam, prometemos.
        </p>

        {showForm ? (
            <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
            aria-label="Formulário de contato"
            >
            <input type="hidden" name="_subject" value="Inscrição na lista de espera do Petya" />

            {/* MENSAGEM */}
            <div>
                <input
                id="message"
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-6 py-3 rounded-full border border-teal-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 outline-none"
                placeholder="Seu nome"
                />
            </div>

            {/* EMAIL */}
            <div>
                <input
                id="email"
                name="_replyto"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-3 rounded-full border border-teal-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 outline-none"
                placeholder="Seu melhor e-mail"
                />
            </div>

            {/* HONEYPOT */}
            <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
            />

            {/* BOTÃO */}
            <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-sky-600 text-white font-semibold hover:scale-105 transition cursor-pointer disabled:cursor-not-allowed"
            >
                {loading ? 'Enviando...' : 'Quero acesso antecipado'}
            </button>
            </form>
        ) : (
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 shadow-lg text-center space-y-4">
            {success && (
                <p className="text-green-400 text-lg font-semibold">
                  Cadastro confirmado 🎉 <br />
                  Obrigado por entrar na lista de espera do Petya.
                </p>
            )}

            {error && (
                <p className="text-red-400 text-lg font-semibold">
                Ocorreu um erro ao enviar o formulário.
                </p>
            )}

            <p className="text-gray-400">
                Você poderá enviar outra mensagem em{' '}
                <span className="font-bold text-cyan-400">{countdown}</span> segundos.
            </p>
            </div>
        )}
        </div>
    </section>
  )
}
