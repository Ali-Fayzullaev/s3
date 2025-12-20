'use client'

import { useState, useEffect } from 'react'
import { X, Send, Phone, User, MessageCircle, Loader } from 'lucide-react'
import { useApp } from '../lib/context'
import { sendServiceRequest, ServiceMessage } from '../lib/api/whatsapp'

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  serviceName: string
  serviceId: string
}

export default function ServiceModal({ isOpen, onClose, serviceName, serviceId }: ServiceModalProps) {
  const { t } = useApp()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const [formData, setFormData] = useState({
    clientName: '',
    clientPhone: '',
    message: `Здравствуйте! Меня интересует услуга "${serviceName}". Хотел бы узнать подробности и записаться на процедуру.`
  })

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const serviceData: ServiceMessage = {
        serviceName,
        clientName: formData.clientName,
        clientPhone: formData.clientPhone,
        message: formData.message
      }

      const success = await sendServiceRequest(serviceData)

      if (success) {
        setShowSuccess(true)
        setTimeout(() => {
          setShowSuccess(false)
          onClose()
          // Сброс формы
          setFormData({
            clientName: '',
            clientPhone: '',
            message: `Здравствуйте! Меня интересует услуга "${serviceName}". Хотел бы узнать подробности и записаться на процедуру.`
          })
        }, 3000)
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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg mx-4 bg-card rounded-2xl shadow-2xl border border-border max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card rounded-t-2xl border-b border-border p-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-card-foreground">
              Быстрый заказ
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {serviceName}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {showSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-card-foreground mb-2">
                Заявка отправлена!
              </h4>
              <p className="text-muted-foreground">
                Мы получили вашу заявку и свяжемся с вами через WhatsApp в ближайшее время.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
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

              {/* Message */}
              <div>
                <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Ваше сообщение
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Расскажите о ваших пожеланиях..."
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
                    Отправить заявку
                  </>
                )}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}