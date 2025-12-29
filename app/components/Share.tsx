'use client'

import { Share2, PawPrint } from 'lucide-react'

export function Share() {
    const handleShare = async () => {
        const url = 'https://petya.com.br'

        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Petya – Saúde do seu pet organizada',
                    text: 'Olha que legal: um lugar para organizar todo o histórico de saúde do seu pet 🐾',
                    url,
                })
            } catch {
                // usuário cancelou — não faz nada
            }
        } else {
            await navigator.clipboard.writeText(url)
            alert('Link copiado ✨')
        }
    }

    return (
        <div className="flex flex-col items-center gap-4 py-32 text-center">
            <div className="flex text-center px-4 mb-4">
                <PawPrint size={22} />
                <span className="px-2 font-bold">
                    Conhece alguém que também ama o pet como você?
                </span>
            </div>

            <button
                onClick={handleShare}
                className="
                    inline-flex items-center gap-2
                    px-6 py-3 rounded-full
                    text-white font-medium
                    bg-emerald-600
                    transition
                    cursor-pointer
                    "
            >
                <Share2 size={18} />
                Compartilhe
            </button>
        </div>
    )
}
