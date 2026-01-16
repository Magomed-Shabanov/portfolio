'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            // Используем mailto для отправки (работает везде)
            const subject = encodeURIComponent(`Сообщение от ${formData.name}`)
            const body = encodeURIComponent(
                `Имя: ${formData.name}\nEmail: ${formData.email}\n\nСообщение:\n${formData.message}`
            )
            const mailtoLink = `mailto:maga-s-daga@mail.ru?subject=${subject}&body=${body}`

            // Открываем почтовый клиент через mailto
            // Используем динамический импорт для работы с window в клиентском компоненте
            if (typeof window !== 'undefined') {
                const win = window as Window & typeof globalThis
                win.location.href = mailtoLink
            }

            // Альтернатива: можно использовать сервис типа Formspree или EmailJS
            // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // })

            setSubmitStatus('success')
            setFormData({ name: '', email: '', message: '' })

            setTimeout(() => setSubmitStatus('idle'), 3000)
        } catch (error) {
            setSubmitStatus('error')
            setTimeout(() => setSubmitStatus('idle'), 3000)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <footer className="bg-gradient-to-t from-slate-900/80 to-transparent border-t border-slate-700/50 mt-24 md:mt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Форма обратной связи */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">Свяжитесь со мной</h3>
                        <p className="text-gray-400 mb-6">
                            Есть вопросы или предложения? Напишите мне!
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Ваше имя"
                                    value={formData.name}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        setFormData({ ...formData, name: e.currentTarget.value })
                                    }}
                                    required
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Ваш email"
                                    value={formData.email}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        setFormData({ ...formData, email: e.currentTarget.value })
                                    }}
                                    required
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Ваше сообщение"
                                    value={formData.message}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                        setFormData({ ...formData, message: e.currentTarget.value })
                                    }}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                            </button>
                            {submitStatus === 'success' && (
                                <p className="text-green-400 text-sm">Сообщение отправлено! Проверьте почтовый клиент.</p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="text-red-400 text-sm">Ошибка отправки. Попробуйте ещё раз.</p>
                            )}
                        </form>
                    </motion.div>

                    {/* Контакты и информация */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">
                                X
                            </div>
                            <div>
                                <div className="font-bold text-white text-lg">XPro-Servis</div>
                                <div className="text-sm text-blue-400">Code • Create • Innovate</div>
                            </div>
                        </div>

                        <p className="text-gray-400 mb-6">
                            Full-Stack разработчик, специализирующийся на создании современных веб-приложений.
                        </p>

                        <div className="flex gap-4 mb-6">
                            {[
                                { name: 'GitHub', href: 'https://github.com/Magomed-Shabanov', icon: '🔗' },
                                { name: 'WhatsApp', href: 'https://wa.me/79882086166?text=Привет!%20Хочу%20обсудить%20проект', icon: '📱' },
                                { name: 'LinkedIn', href: '#', icon: '💼' },
                            ].map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center bg-slate-800/50 border border-slate-700 rounded-lg text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
                                    title={link.name}
                                >
                                    <span className="text-xl">{link.icon}</span>
                                </a>
                            ))}
                        </div>

                        <div className="text-gray-400 text-sm">
                            <p>📧 maga-s-daga@mail.ru</p>
                            <p className="mt-2">📱 +7 (988) 208-61-66</p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center pt-8 border-t border-slate-700/50"
                >
                    <p className="text-gray-400 text-sm">
                        © 2026 XPro-Servis. Все права защищены.
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}
