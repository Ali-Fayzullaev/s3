'use client'

import { useState, useEffect } from 'react'
import { X, Send, User, ChevronDown, MessageCircle } from 'lucide-react'
import { useApp } from '../lib/context'
import { COMPANY_CONFIG, getWhatsAppQuoteLink } from '../lib/company-config'
import { servicesData } from '../lib/services-data'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const { language } = useApp()
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)

  const [formData, setFormData] = useState({
    clientName: '',
    selectedService: 'other',
  })

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleServiceSelect = (serviceId: string) => {
    setFormData({ ...formData, selectedService: serviceId })
    setIsServiceDropdownOpen(false)
  }

  const getServiceName = (serviceId: string) => {
    if (serviceId === 'other') {
      return language === 'ru' ? 'Другая услуга' : 'Басқа қызмет'
    }
    const service = servicesData.find(s => s.id === serviceId)
    return service ? service.name[language] : ''
  }

  const handleQuickQuote = () => {
    const serviceName = getServiceName(formData.selectedService)
    window.open(getWhatsAppQuoteLink(serviceName, language), '_blank')
    onClose()
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const serviceName = getServiceName(formData.selectedService)
    let msg = language === 'ru'
      ? `Здравствуйте! Хотел бы получить расчет стоимости на услугу: ${serviceName}.`
      : `Сәлеметсіз бе! ${serviceName} қызметінің бағасын есептеп бере аласыз ба?`
    if (formData.clientName) msg += `\n\n${language === 'ru' ? 'Имя' : 'Аты'}: ${formData.clientName}`

    const url = `https://wa.me/${COMPANY_CONFIG.contacts.phone.whatsapp}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
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
              {language === 'ru' ? 'Получить расчет' : 'Баға алу'}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {language === 'ru' ? 'Выберите услугу и отправьте в WhatsApp' : 'Қызметті таңдап, WhatsApp-қа жіберіңіз'}
            </p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            {/* Name */}
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

            {/* Service Selection */}
            <div>
              <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
                {language === 'ru' ? 'Выберите услугу' : 'Қызметті таңдаңыз'}
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all flex items-center justify-between"
                >
                  <span>{getServiceName(formData.selectedService)}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isServiceDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServiceDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-xl shadow-xl z-10 max-h-60 overflow-y-auto">
                    <button
                      type="button"
                      onClick={() => handleServiceSelect('other')}
                      className="w-full px-4 py-3 text-left hover:bg-accent transition-colors"
                    >
                      {language === 'ru' ? 'Другая услуга' : 'Басқа қызмет'}
                    </button>
                    {servicesData.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleServiceSelect(service.id)}
                        className="w-full px-4 py-3 text-left hover:bg-accent transition-colors"
                      >
                        {service.name[language]}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {language === 'ru' ? 'Получить расчет через WhatsApp' : 'WhatsApp арқылы баға алу'}
            </button>

            <p className="text-xs text-muted-foreground text-center">
              {language === 'ru'
                ? 'Вы будете перенаправлены в WhatsApp'
                : 'Сіз WhatsApp-қа бағытталасыз'}
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}