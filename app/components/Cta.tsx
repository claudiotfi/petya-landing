'use client'

import { useRef, useState } from 'react'

export function Cta() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  function handlePlay() {
    if (!videoRef.current) return

    videoRef.current.muted = false
    videoRef.current.play()
    setIsPlaying(true)
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-r from-emerald-600 to-sky-500 text-white">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Conteúdo */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-6">
            Cuidar da saúde do seu pet pode ser simples
          </h2>

          <p className="text-xl mb-10 opacity-90">
            Entre na lista e seja um dos primeiros a usar o Petya gratuitamente.
          </p>

          <a
            href="#waiting-list"
            className="inline-block px-10 py-5 rounded-full bg-white text-emerald-600 font-bold text-lg transition hover:scale-105"
          >
            Cadastre-se gratuitamente
          </a>
        </div>

        {/* Vídeo */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[320px]">

            <video
              ref={videoRef}
              src="/videos/video-3.mp4"
              className="w-full rounded-2xl shadow-lg"
              playsInline
              preload="metadata"
              aria-label="Vídeo explicativo do Petya, plataforma de histórico de saúde digital para pets"
              title="Como o Petya organiza o histórico de saúde do seu pet"
              poster="/images/video-poster.jpg"
              onEnded={() => setIsPlaying(false)}
            />

            {!isPlaying && (
              <button
                onClick={handlePlay}
                aria-label="Reproduzir vídeo"
                className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/30 transition hover:bg-black/40"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12 text-pink-600 ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}

          </div>
        </div>

      </div>
    </section>
  )
}
