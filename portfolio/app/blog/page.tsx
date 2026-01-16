'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface BlogPost {
    id: string
    title: string
    excerpt: string
    category: string
    date: string
    readTime: string
    slug: string
    image: string
}

export default function Blog() {
    const [selectedCategory, setSelectedCategory] = useState('Все')

    const blogPosts: BlogPost[] = [
        {
            id: '1',
            title: 'Full‑Stack разработка в 2026: What\'s New',
            excerpt: 'Новый год приносит новые возможности в мире разработки. React 19 и Next.js 16 становятся стандартами.',
            category: 'Технологии',
            date: '15 января 2026',
            readTime: '5 мин',
            slug: 'fullstack-trends-2026',
            image: 'from-blue-500/20 to-cyan-500/20',
        },
        {
            id: '2',
            title: 'Оптимизация производительности: Best Practices',
            excerpt: 'Core Web Vitals, кэширование и lazy loading — основные инструменты оптимизации вашего приложения.',
            category: 'Performance',
            date: '12 января 2026',
            readTime: '8 мин',
            slug: 'performance-optimization',
            image: 'from-purple-500/20 to-pink-500/20',
        },
        {
            id: '3',
            title: 'TypeScript: From Basics to Advanced',
            excerpt: 'Полный гайд по TypeScript: от основных типов до продвинутых паттернов и best practices.',
            category: 'TypeScript',
            date: '10 января 2026',
            readTime: '12 мин',
            slug: 'typescript-guide',
            image: 'from-green-500/20 to-emerald-500/20',
        },
        {
            id: '4',
            title: 'REST API Design Best Practices',
            excerpt: 'Правильные HTTP методы, структурирование URL, обработка ошибок и документирование API.',
            category: 'Backend',
            date: '8 января 2026',
            readTime: '7 мин',
            slug: 'rest-api-design',
            image: 'from-orange-500/20 to-red-500/20',
        },
        {
            id: '5',
            title: 'React Server Components: Future of Web',
            excerpt: 'React Server Components революционизируют способ написания React приложений и улучшают производительность.',
            category: 'React',
            date: '5 января 2026',
            readTime: '10 мин',
            slug: 'react-server-components',
            image: 'from-indigo-500/20 to-blue-500/20',
        },
        {
            id: '6',
            title: 'DevOps для Frontend разработчиков',
            excerpt: 'Базовые знания Docker, CI/CD и деплоя для фронтенд разработчиков, которые хотят расширить свои навыки.',
            category: 'DevOps',
            date: '3 января 2026',
            readTime: '9 мин',
            slug: 'devops-for-developers',
            image: 'from-yellow-500/20 to-orange-500/20',
        },
    ]

    const categories = ['Все', 'Технологии', 'Performance', 'TypeScript', 'Backend', 'React', 'DevOps']

    const filteredPosts = selectedCategory === 'Все'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory)

    return (
        <main className="w-full pt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-blue-400 font-semibold text-sm">БЛОГ</span>
                    <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-4 pt-6">
                        Мои <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">статьи</span>
                    </h1>
                    <p className="text-gray-300 text-lg mb-12 max-w-2xl">
                        Делюсь знаниями и опытом в веб-разработке, оптимизации и современных технологиях.
                    </p>

                    {/* Categories */}
                    <motion.div
                        className="flex flex-wrap gap-3 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedCategory === category
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>

                    {/* Blog Posts Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                    >
                        {filteredPosts.map((post) => (
                            <motion.a
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className={`group p-6 bg-gradient-to-br ${post.image} border border-slate-700/50 rounded-lg hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 block h-full`}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                                        {post.category}
                                    </span>
                                    <span className="text-xs text-gray-400">{post.readTime}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <div className="text-xs text-gray-400">
                                    {post.date}
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Newsletter Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-16 p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg text-center"
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Подпишись на новые статьи
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Получай уведомления о новых статьях прямо на почту
                        </p>
                        <div className="flex gap-2 max-w-sm mx-auto">
                            <input
                                type="email"
                                placeholder="Твой email"
                                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                            />
                            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">
                                Подписаться
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    )
}
