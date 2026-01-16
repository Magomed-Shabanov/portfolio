'use client'
import { motion } from 'framer-motion'

export default function Contact() {
    const contacts = [
        { icon: '📧', label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
        { icon: '💼', label: 'GitHub', value: 'github.com/Magomed-Shabanov', href: 'https://github.com/Magomed-Shabanov' },
        { icon: '💬', label: 'Telegram', value: 't.me/username', href: '#' },
        { icon: '📱', label: 'WhatsApp', value: '+7 (988) 208-61-66', href: 'https://wa.me/79882086166?text=Привет!%20Хочу%20обсудить%20проект' },
    ]

    return (
        <section id="contact" className="py-24 md:py-32 pt-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-2xl"
            >
                <span className="text-blue-400 font-semibold text-sm">КОНТАКТЫ</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 pt-6">Давайте работать вместе</h2>
                <p className="text-gray-300 text-lg mb-12">
                    Я всегда открыт к новым возможностям и интересным проектам.
                    Не стесняйтесь связаться со мной!
                </p>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                    viewport={{ once: true }}
                >
                    {contacts.map((contact, i) => (
                        <motion.a
                            key={i}
                            href={contact.href}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-800/20 border border-slate-700/50 rounded-lg hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 group"
                        >
                            <div className="text-3xl mb-2">{contact.icon}</div>
                            <div className="text-gray-400 text-sm">{contact.label}</div>
                            <div className="text-white font-medium mt-1 group-hover:text-blue-400 transition-colors">
                                {contact.value}
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}
