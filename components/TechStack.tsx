'use client'
import { motion } from 'framer-motion'

export default function TechStack() {
    const technologies = [
        {
            category: 'Frontend',
            items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        },
        {
            category: 'Backend',
            items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Firebase'],
        },
        {
            category: 'Databases',
            items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Supabase'],
        },
        {
            category: 'DevOps',
            items: ['Docker', 'GitHub Actions', 'Vercel', 'AWS', 'CI/CD'],
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    return (
        <section id="tech" className="py-24 md:py-32 pt-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <span className="text-blue-400 font-semibold text-sm">ТЕХНОЛОГИИ</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-12 pt-6">
                    Мой стек технологий
                </h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {technologies.map((tech, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-800/20 border border-slate-700/50 rounded-lg hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">{tech.category}</h3>
                            <div className="space-y-2">
                                {tech.items.map((item, j) => (
                                    <div key={j} className="flex items-center gap-2 text-gray-300">
                                        <span className="text-blue-400">•</span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}
