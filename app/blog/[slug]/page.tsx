'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface BlogPost {
    title: string
    category: string
    date: string
    readTime: string
    author: string
    content: string
}

const blogContent: Record<string, BlogPost> = {
    'fullstack-trends-2026': {
        title: 'Full‑Stack разработка в 2026: What\'s New',
        category: 'Технологии',
        date: '15 января 2026',
        readTime: '5 мин',
        author: 'XPro-Servis',
        content: 'Новый год приносит новые возможности в мире разработки. React 19, Next.js 16 и TypeScript становятся стандартами индустрии. Давайте посмотрим, что будет актуально в 2026 году и как это влияет на способ, которым мы разрабатываем веб‑приложения.',
    },
    'performance-optimization': {
        title: 'Оптимизация производительности: Best Practices',
        category: 'Performance',
        date: '12 января 2026',
        readTime: '8 мин',
        author: 'XPro-Servis',
        content: 'Производительность - это ключевой фактор для успешного веб-приложения. Core Web Vitals, кэширование и lazy loading - основные инструменты оптимизации. Узнайте, как сделать ваше приложение молниеносно быстрым.',
    },
    'typescript-guide': {
        title: 'TypeScript: From Basics to Advanced',
        category: 'TypeScript',
        date: '10 января 2026',
        readTime: '12 мин',
        author: 'XPro-Servis',
        content: 'TypeScript - это надстройка над JavaScript, которая добавляет статическую типизацию. От основных типов до продвинутых паттернов, мы пройдем весь путь освоения этого мощного инструмента.',
    },
    'rest-api-design': {
        title: 'REST API Design Best Practices',
        category: 'Backend',
        date: '8 января 2026',
        readTime: '7 мин',
        author: 'XPro-Servis',
        content: 'Проектирование хорошего REST API - это искусство и наука. Правильные HTTP методы, структурирование URL, обработка ошибок и документирование - всё это ключевые элементы успешного API.',
    },
    'react-server-components': {
        title: 'React Server Components: Future of Web',
        category: 'React',
        date: '5 января 2026',
        readTime: '10 мин',
        author: 'XPro-Servis',
        content: 'React Server Components - это революционный способ писать React приложения. Они выполняются только на сервере и отправляют результат клиенту, что приводит к меньшему размеру JavaScript и лучшей производительности.',
    },
    'devops-for-developers': {
        title: 'DevOps для Frontend разработчиков',
        category: 'DevOps',
        date: '3 января 2026',
        readTime: '9 мин',
        author: 'XPro-Servis',
        content: 'Вам не нужно быть DevOps специалистом, но базовые знания Docker, CI/CD и деплоя очень полезны. Узнайте, как автоматизировать разработку и делать релизы более надежными.',
    }
}

export default function BlogPost() {
    const params = useParams()
    const slug = params?.slug as string
    const post = blogContent[slug]

    if (!post) {
        return (
            <main className="w-full pt-32 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white mb-4">Статья не найдена</h1>
                    <Link href="/blog" className="text-blue-400 hover:text-blue-300">
                        ← Вернуться в блог
                    </Link>
                </div>
            </main>
        )
    }

    return (
        <main className="w-full pt-32">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Back link */}
                    <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm mb-8 inline-block">
                        ← Вернуться в блог
                    </Link>

                    {/* Header */}
                    <div className="mb-12 pt-8">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                                {post.category}
                            </span>
                            <span className="text-xs text-gray-500">{post.readTime}</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 pt-12 mt-9">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4 text-gray-400 text-sm">
                            <span>{post.author}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                        </div>
                    </div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="prose prose-invert max-w-none mb-16"
                    >
                        <div className="text-gray-300 leading-relaxed space-y-6">
                            <p className="text-lg">{post.content}</p>
                            <p className="text-gray-400 italic">
                                Эта статья представляет собой обзор основных концепций и лучших практик в области веб-разработки.
                                Рекомендуется дополнять информацию из официальной документации и других источников.
                            </p>
                        </div>
                    </motion.div>

                    {/* Footer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mt-16 pt-8 border-t border-slate-700/50"
                    >
                        <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-6 mb-8">
                            <p className="text-gray-300 mb-4">
                                Понравилась статья? Поделись с друзьями! 🚀
                            </p>
                            <div className="flex gap-3">
                                <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors text-sm">
                                    Twitter
                                </button>
                                <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors text-sm">
                                    LinkedIn
                                </button>
                            </div>
                        </div>

                        <p className="text-gray-400 text-sm">
                            Спасибо за внимание! Следи за новыми статьями на странице блога.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    )
}
