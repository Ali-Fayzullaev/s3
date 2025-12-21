'use client'

import { useState } from 'react'
import { Send, Phone, User, Car, Loader } from 'lucide-react'
import { useApp } from '../lib/context'
import { sendServiceRequest, ServiceMessage } from '../lib/api/whatsapp'

interface ServiceFormProps {
  serviceName: string
  serviceId: string
}

export default function ServiceForm({ serviceName, serviceId }: ServiceFormProps) {
  const { t } = useApp()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const [formData, setFormData] = useState({
    clientName: '',
    clientPhone: '',
    carModel: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        message: `Заявка на услугу: ${serviceName}. ${formData.carModel ? `Автомобиль: ${formData.carModel}` : 'Модель автомобиля не указана.'}`,
        carModel: formData.carModel || undefined
      }

      const success = await sendServiceRequest(baseData)

      if (success) {
        setShowSuccess(true)
        setFormData({
          clientName: '',
          clientPhone: '',
          carModel: ''
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
        {t('orderServiceTitle')}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Client Name */}
        <div>
          <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
            <User className="w-4 h-4 mr-2" />
            {t('yourName')} *
          </label>
          <input
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder={t('enterName')}
          />
        </div>

        {/* Phone */}
        <div>
          <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
            <Phone className="w-4 h-4 mr-2" />
            {t('phoneNumber')} *
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

        {/* Car Model */}
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

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader className="w-5 h-5 mr-2 animate-spin" />
              {t('sendRequest')}...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              {t('sendRequest')}
            </>
          )}
        </button>

        <p className="text-xs text-muted-foreground text-center">
          {t('agreeToProcessing')}
        </p>
      </form>
    </div>
  )
}