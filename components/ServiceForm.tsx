'use client'

import { useState } from 'react'
import { Send, Phone, User, Mail, Car, MessageCircle, Clock, Calendar, Loader } from 'lucide-react'
import { useApp } from '../lib/context'
import { sendServiceRequest, sendQuoteRequest, ServiceMessage, QuoteRequest } from '../lib/api/whatsapp'

interface ServiceFormProps {
  serviceName: string
  serviceId: string
}

export default function ServiceForm({ serviceName, serviceId }: ServiceFormProps) {
  const { t } = useApp()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formType, setFormType] = useState<'service' | 'quote'>('service')

  const [formData, setFormData] = useState({
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    carModel: '',
    message: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const baseData: ServiceMessage = {
        serviceName,
        clientName: formData.clientName,
        clientPhone: formData.clientPhone,
        clientEmail: formData.clientEmail || undefined,
        carModel: formData.carModel || undefined,
        message: formData.message
      }

      let success = false

      if (formType === 'quote') {
        const quoteData: QuoteRequest = {
          ...baseData,
          serviceType: formData.serviceType,
          preferredDate: formData.preferredDate || undefined,
          preferredTime: formData.preferredTime || undefined
        }
        success = await sendQuoteRequest(quoteData)
      } else {
        success = await sendServiceRequest(baseData)
      }

      if (success) {
        setShowSuccess(true)
        setFormData({
          clientName: '',
          clientPhone: '',
          clientEmail: '',
          carModel: '',
          message: '',
          serviceType: '',
          preferredDate: '',
          preferredTime: ''
        })
        setTimeout(() => setShowSuccess(false), 5000)
      } else {
        alert('Ошибка при отправке заявки. Попробуйте еще раз.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Ошибка при отправке заявки. Попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (showSuccess) {
    return (
      <div className="bg-card rounded-2xl p-8 shadow-xl border border-green-200">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-card-foreground mb-2">
            Заявка отправлена!
          </h3>
          <p className="text-muted-foreground">
            Мы получили вашу заявку и свяжемся с вами в ближайшее время через WhatsApp.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card rounded-2xl p-8 shadow-xl border">
      <h3 className="text-2xl font-bold text-card-foreground mb-6">
        Оставить заявку на услугу
      </h3>

      {/* Form Type Toggle */}
      <div className="flex bg-muted rounded-lg p-1 mb-6">
        <button
          type="button"
          onClick={() => setFormType('service')}
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
            formType === 'service'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Заказать услугу
        </button>
        <button
          type="button"
          onClick={() => setFormType('quote')}
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
            formType === 'quote'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Узнать стоимость
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Client Name */}
        <div>
          <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
            <User className="w-4 h-4 mr-2" />
            Ваше имя *
          </label>
          <input
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Введите ваше имя"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
            <Phone className="w-4 h-4 mr-2" />
            Номер телефона *
          </label>
          <input
            type="tel"
            name="clientPhone"
            value={formData.clientPhone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="+7 (777) 123-45-67"
          />
        </div>

        {/* Email */}
        <div>
          <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
            <Mail className="w-4 h-4 mr-2" />
            Email (необязательно)
          </label>
          <input
            type="email"
            name="clientEmail"
            value={formData.clientEmail}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="your@email.com"
          />
        </div>

        {/* Car Model */}
        <div>
          <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
            <Car className="w-4 h-4 mr-2" />
            Модель автомобиля (необязательно)
          </label>
          <input
            type="text"
            name="carModel"
            value={formData.carModel}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Toyota Camry 2020"
          />
        </div>

        {/* Service Type for Quote */}
        {formType === 'quote' && (
          <div>
            <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
              <MessageCircle className="w-4 h-4 mr-2" />
              Тип услуги *
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            >
              <option value="">Выберите тип услуги</option>
              <option value="basic">Базовый пакет</option>
              <option value="premium">Премиум пакет</option>
              <option value="full">Полный пакет</option>
              <option value="custom">Индивидуальный</option>
            </select>
          </div>
        )}

        {/* Preferred Date and Time for Quote */}
        {formType === 'quote' && (
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                Предпочтительная дата
              </label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
                <Clock className="w-4 h-4 mr-2" />
                Предпочтительное время
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                <option value="">Выберите время</option>
                <option value="9:00-12:00">9:00 - 12:00</option>
                <option value="12:00-15:00">12:00 - 15:00</option>
                <option value="15:00-18:00">15:00 - 18:00</option>
              </select>
            </div>
          </div>
        )}

        {/* Message */}
        <div>
          <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
            <MessageCircle className="w-4 h-4 mr-2" />
            {formType === 'quote' ? 'Дополнительная информация' : 'Ваше сообщение *'}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required={formType === 'service'}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            placeholder={formType === 'quote' 
              ? "Расскажите о ваших пожеланиях..." 
              : "Опишите что вас интересует..."
            }
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader className="w-5 h-5 mr-2 animate-spin" />
              Отправка...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              {formType === 'quote' ? 'Узнать стоимость' : 'Отправить заявку'}
            </>
          )}
        </button>

        <p className="text-xs text-muted-foreground text-center">
          Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
        </p>
      </form>
    </div>
  )
}