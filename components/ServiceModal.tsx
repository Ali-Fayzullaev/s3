'use client'

import { useState, useEffect } from 'react'
import { X, Send, User, MessageCircle } from 'lucide-react'
import { useApp } from '../lib/context'
import { COMPANY_CONFIG, getWhatsAppServiceLink } from '../lib/company-config'

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  serviceName: string
  serviceId: string
}

export default function ServiceModal({ isOpen, onClose, serviceName }: ServiceModalProps) {
  const { language } = useApp()

  const [formData, setFormData] = useState({
    clientName: '',
    message: '',
  })

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        message: language === 'ru'
          ? `Здравствуйте! Меня интересует услуга "${serviceName}". Хотел бы узнать подробности и записаться.`
          : `Сәлеметсіз бе! "${serviceName}" қызметі қызықтырады. Толығырақ білгім келеді.`,
      }))
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, serviceName, language])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const buildWhatsAppUrl = (msg: string) => {
    return `https://wa.me/${COMPANY_CONFIG.contacts.phone.whatsapp}?text=${encodeURIComponent(msg)}`
  }

  const handleQuickOrder = () => {
    window.open(getWhatsAppServiceLink(serviceName, language), '_blank')
    onClose()
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let msg = formData.message
    if (formData.clientName) {
      msg += `\n\n${language === 'ru' ? 'Имя' : 'Аты'}: ${formData.clientName}`
    }
    window.open(buildWhatsAppUrl(msg), '_blank')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg mx-4 bg-card rounded-2xl shadow-2xl border border-border max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card rounded-t-2xl border-b border-border p-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-card-foreground">
              {language === 'ru' ? 'Заказать услугу' : 'Қызметке тапсырыс беру'}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{serviceName}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {/* Быстрый заказ */}
          <button
            onClick={handleQuickOrder}
            className="w-full mb-6 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            {language === 'ru' ? 'Быстрый заказ через WhatsApp' : 'WhatsApp арқылы жылдам тапсырыс'}
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border"></div></div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-card px-4 text-muted-foreground">
                {language === 'ru' ? 'или заполните форму' : 'немесе форманы толтырыңыз'}
              </span>
            </div>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
                <User className="w-4 h-4 mr-2" />
                {language === 'ru' ? 'Ваше имя' : 'Сіздің атыңыз'}
              </label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder={language === 'ru' ? 'Введите ваше имя' : 'Атыңызды енгізіңіз'}
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
                <MessageCircle className="w-4 h-4 mr-2" />
                {language === 'ru' ? 'Сообщение' : 'Хабарлама'}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              {language === 'ru' ? 'Отправить в WhatsApp' : 'WhatsApp-қа жіберу'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}