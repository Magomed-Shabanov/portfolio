'use client'
import { motion } from 'framer-motion'

export default function About() {
    const stats = [
        { label: 'Лет опыта', value: '5+' },
        { label: 'Проектов', value: '50+' },
        { label: 'Клиентов', value: '30+' },
        { label: 'Технологий', value: '15+' },
    ]

    return (
        <section id="about" className="py-24 md:py-32 pt-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
                <div>
                    <span className="text-blue-400 font-semibold text-sm">ОБО МНЕ</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 pt-6">
                        Full‑Stack разработчик с{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            страстью к коду
                        </span>
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        Я специализируюсь на создании высокопроизводительных веб‑приложений с использованием
                        современных технологий. От фронтенда до бэкенда — я готов реализовать вашу идею.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-2 gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                    viewport={{ once: true }}
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-800/20 border border-slate-700/50 rounded-lg"
                        >
                            <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}
