'use client'

import { useState, useEffect } from 'react'
import { X, User, Phone, Car } from 'lucide-react'
import { useApp } from '../lib/context'

interface QuoteFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuoteFormModal({ isOpen, onClose }: QuoteFormModalProps) {
  const { language } = useApp()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Закрытие модала по Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
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

  // Сброс формы при закрытии
  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: '', phone: '', service: '' })
      setIsSubmitting(false)
    }
  }, [isOpen])

  const services = [
    { 
      value: 'exterior_detailing', 
      label: language === 'ru' ? 'Внешний детейлинг' : 'Сыртқы детейлинг' 
    },
    { 
      value: 'interior_detailing', 
      label: language === 'ru' ? 'Внутренний детейлинг' : 'Ішкі детейлинг' 
    },
    { 
      value: 'full_detailing', 
      label: language === 'ru' ? 'Полный детейлинг' : 'Толық детейлинг' 
    },
    { 
      value: 'ceramic_coating', 
      label: language === 'ru' ? 'Керамическое покрытие' : 'Керамикалық жабын' 
    },
    { 
      value: 'paint_correction', 
      label: language === 'ru' ? 'Коррекция лакокрасочного покрытия' : 'Бояу түзету' 
    },
    { 
      value: 'tinting', 
      label: language === 'ru' ? 'Тонировка' : 'Тонировка' 
    },
    { 
      value: 'other', 
      label: language === 'ru' ? 'Другое' : 'Басқа' 
    }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.phone || !formData.service) {
      return
    }

    setIsSubmitting(true)

    try {
      // Отправляем данные в WhatsApp API
      const response = await fetch('/api/whatsapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'quote_request',
          name: formData.name,
          phone: formData.phone,
          service: formData.service
        }),
      })

      if (response.ok) {
        // Успешно отправлено
        alert(language === 'ru' 
          ? 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.'
          : 'Өтініш жіберілді! Біз сізбен жақын арада байланысамыз.'
        )
        onClose()
      } else {
        throw new Error('Failed to send')
      }
    } catch (error) {
      alert(language === 'ru' 
        ? 'Произошла ошибка при отправке заявки. Попробуйте еще раз.'
        : 'Өтінішті жіберу кезінде қате орын алды. Қайталап көріңіз.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">
            {language === 'ru' ? 'Получить расчет' : 'Есеп алу'}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'ru' ? 'Имя' : 'Аты'}
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder={language === 'ru' ? 'Введите ваше имя' : 'Атыңызды енгізіңіз'}
                required
              />
            </div>
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'ru' ? 'Номер телефона' : 'Телефон нөмірі'}
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder={language === 'ru' ? '+7 (___) ___-__-__' : '+7 (___) ___-__-__'}
                required
              />
            </div>
          </div>

          {/* Service Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'ru' ? 'Услуга' : 'Қызмет'}
            </label>
            <div className="relative">
              <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={formData.service}
                onChange={(e) => handleInputChange('service', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
                required
              >
                <option value="">
                  {language === 'ru' ? 'Выберите услугу' : 'Қызметті таңдаңыз'}
                </option>
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || !formData.name || !formData.phone || !formData.service}
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting 
              ? (language === 'ru' ? 'Отправка...' : 'Жіберуде...')
              : (language === 'ru' ? 'Отправить заявку' : 'Өтініш жіберу')
            }
          </button>
        </form>

        {/* Footer */}
        <div className="px-6 pb-6">
          <p className="text-sm text-gray-500 text-center">
            {language === 'ru' 
              ? 'Мы свяжемся с вами в течение 15 минут'
              : 'Біз сізбен 15 минут ішінде байланысамыз'
            }
          </p>
        </div>
      </div>
    </div>
  )
}