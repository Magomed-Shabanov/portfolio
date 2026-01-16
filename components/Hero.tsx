'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-start pt-32 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-block"
                    >
                        <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
                            💻 Code • Create • Innovate
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-6xl md:text-7xl font-bold leading-tight max-w-4xl"
                    >
                        Я <span className="text-blue-400">создаю</span> цифровые<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">решения</span> будущего
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="space-y-3 max-w-2xl"
                    >
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            Full‑Stack разработчик из <span className="text-blue-400 font-medium">XPro-Servis</span>,
                            специализирующийся на создании высокопроизводительных веб‑приложений с современными технологиями.
                        </p>
                        <p className="text-gray-400">
                            <span className="text-blue-400">•</span> Чистая архитектура <span className="text-blue-400">•</span> Масштабируемость <span className="text-blue-400">•</span> Инновация
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex gap-4 pt-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
                        >
                            Мои проекты
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 hover:bg-blue-500/5 transition-all duration-300"
                        >
                            Связаться
                        </a>
                    </motion.div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="hidden md:block relative h-96"
                >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center">
                        <Image
                            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"
                            alt="Developer workspace"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6 text-white text-sm">
                            💡 Замени это фото на своё через src/image
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <svg
                    className="w-6 h-6 text-gray-400 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </motion.div>
        </section>
    )
}