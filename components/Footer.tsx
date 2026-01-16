'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-gradient-to-t from-slate-900/80 to-transparent border-t border-slate-700/50 mt-24 md:mt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white">
                            X
                        </div>
                        <div>
                            <div className="font-bold text-white text-sm">XPro-Servis</div>
                            <div className="text-xs text-blue-400">Code • Create • Innovate</div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-6 mb-6">
                        {[
                            { name: 'GitHub', href: '#', icon: '🔗' },
                            { name: 'WhatsApp', href: 'https://wa.me/79882086166?text=Привет!%20Хочу%20обсудить%20проект', icon: '📱' },
                            { name: 'LinkedIn', href: '#', icon: '💼' },
                        ].map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                                title={link.name}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    <p className="text-gray-400 text-sm">
                        © 2026 XPro-Servis. Все права защищены.
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}
