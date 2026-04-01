'use client'

import { useState } from 'react'
import { Send, User, Car, MessageCircle } from 'lucide-react'
import { useApp } from '../lib/context'
import { COMPANY_CONFIG, getWhatsAppServiceLink } from '../lib/company-config'

interface ServiceFormProps {
  serviceName: string
  serviceId: string
}

export default function ServiceForm({ serviceName }: ServiceFormProps) {
  const { t, language } = useApp()

  const [formData, setFormData] = useState({
    clientName: '',
    carModel: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleQuickOrder = () => {
    window.open(getWhatsAppServiceLink(serviceName, language), '_blank')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let msg = language === 'ru'
      ? `Здравствуйте! Хочу заказать услугу: ${serviceName}.`
      : `Сәлеметсіз бе! Мен қызметке тапсырыс бергім келеді: ${serviceName}.`
    if (formData.clientName) msg += `\n${language === 'ru' ? 'Имя' : 'Аты'}: ${formData.clientName}`
    if (formData.carModel) msg += `\n${language === 'ru' ? 'Авто' : 'Авто'}: ${formData.carModel}`

    const url = `https://wa.me/${COMPANY_CONFIG.contacts.phone.whatsapp}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
  }

  return (
    <div className="bg-card rounded-2xl p-8 shadow-xl border">
      <h3 className="text-2xl font-bold text-card-foreground mb-6">
        {t('orderServiceTitle')}
      </h3>

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

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
            <User className="w-4 h-4 mr-2" />
            {t('yourName')}
          </label>
          <input
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder={t('enterName')}
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
            <Car className="w-4 h-4 mr-2" />
            {t('carModelOptional')}
          </label>
          <input
            type="text"
            name="carModel"
            value={formData.carModel}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder={t('carModelPlaceholder')}
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
  )
}