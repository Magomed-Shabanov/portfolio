'use client'
import { motion } from 'framer-motion'

export default function Projects() {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'Полнофункциональная платформа электронной коммерции с интеграцией платежей',
            tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
            features: ['Каталог товаров', 'Корзина', 'Платежи', 'Рейтинги'],
            gradient: 'from-blue-500/20 to-cyan-500/20',
            link: '#',
        },
        {
            title: 'Task Management App',
            description: 'Приложение для управления задачами с real-time синхронизацией',
            tech: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
            features: ['Real-time', 'Коллаборация', 'Уведомления', 'Аналитика'],
            gradient: 'from-purple-500/20 to-pink-500/20',
            link: '#',
        },
        {
            title: 'Analytics Dashboard',
            description: 'Интерактивная панель аналитики с визуализацией данных',
            tech: ['Next.js', 'D3.js', 'Node.js', 'MongoDB'],
            features: ['Графики', 'Экспорт', 'Фильтры', 'API'],
            gradient: 'from-green-500/20 to-emerald-500/20',
            link: '#',
        },
    ]

    return (
        <section id="projects" className="py-24 md:py-32 pt-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <span className="text-blue-400 font-semibold text-sm">ПОРТФОЛИО</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-12 pt-6">
                    Избранные проекты
                </h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                    viewport={{ once: true }}
                >
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`p-6 bg-gradient-to-br ${project.gradient} border border-slate-700/50 rounded-lg hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group`}
                        >
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                            <div className="mb-4">
                                <div className="text-xs text-gray-400 mb-2">Технологии:</div>
                                <div className="flex gap-2 flex-wrap">
                                    {project.tech.map((t, j) => (
                                        <span key={j} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="text-xs text-gray-400 mb-2">Возможности:</div>
                                <div className="flex gap-2 flex-wrap">
                                    {project.features.map((f, j) => (
                                        <span key={j} className="text-xs text-gray-300">
                                            {f}
                                            {j < project.features.length - 1 && ' •'}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <a
                                href={project.link}
                                className="inline-block text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                            >
                                Подробнее →
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}
