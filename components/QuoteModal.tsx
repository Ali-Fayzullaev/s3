'use client'

import { useState, useEffect } from 'react'
import { X, Send, Phone, User, ChevronDown, Loader } from 'lucide-react'
import { useApp } from '../lib/context'
import { sendServiceRequest, ServiceMessage } from '../lib/api/whatsapp'
import { servicesData } from '../lib/services-data'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const { t, language } = useApp()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)

  const [formData, setFormData] = useState({
    clientName: '',
    clientPhone: '',
    selectedService: 'other'
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleServiceSelect = (serviceId: string) => {
    setFormData({
      ...formData,
      selectedService: serviceId
    })
    setIsServiceDropdownOpen(false)
  }

  const getServiceName = (serviceId: string) => {
    if (serviceId === 'other') {
      return language === 'ru' ? 'Другая услуга' : 'Басқа қызмет'
    }
    const service = servicesData.find(s => s.id === serviceId)
    return service ? service.name[language] : ''
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const serviceName = getServiceName(formData.selectedService)
      const message = language === 'ru' 
        ? `Здравствуйте! Хотел бы получить расчет на услугу "${serviceName}". Свяжитесь со мной, пожалуйста.`
        : `Сәлеметсіз бе! "${serviceName}" қызметіне баға алғым келеді. Маған хабарласыңыз.`

      const serviceData: ServiceMessage = {
        serviceName,
        clientName: formData.clientName,
        clientPhone: formData.clientPhone,
        message
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
            selectedService: 'other'
          })
        }, 3000)
      } else {
        alert(language === 'ru' 
          ? 'Ошибка при отправке заявки. Попробуйте еще раз.' 
          : 'Өтінімді жіберуде қате. Қайтадан көріңіз.'
        )
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert(language === 'ru' 
        ? 'Ошибка при отправке заявки. Попробуйте еще раз.' 
        : 'Өтінімді жіберуде қате. Қайтадан көріңіз.'
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
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg mx-4 bg-card rounded-2xl shadow-2xl border border-border max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card rounded-t-2xl border-b border-border p-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-card-foreground">
              {language === 'ru' ? 'Получить расчет' : 'Баға алу'}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {language === 'ru' 
                ? 'Заполните форму и мы свяжемся с вами' 
                : 'Форманы толтырыңыз, біз сізбен байланысамыз'
              }
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
                {language === 'ru' ? 'Заявка отправлена!' : 'Өтінім жіберілді!'}
              </h4>
              <p className="text-muted-foreground">
                {language === 'ru' 
                  ? 'Мы получили вашу заявку и свяжемся с вами через WhatsApp в ближайшее время.'
                  : 'Біз сіздің өтініміңізді алдық және жақын арада WhatsApp арқылы сізбен байланысамыз.'
                }
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
                  <User className="w-4 h-4 mr-2" />
                  {language === 'ru' ? 'Ваше имя *' : 'Сіздің атыңыз *'}
                </label>
                <input
                  type="text"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder={language === 'ru' ? 'Введите ваше имя' : 'Атыңызды енгізіңіз'}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  {language === 'ru' ? 'Номер телефона *' : 'Телефон нөмірі *'}
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

              {/* Service Selection */}
              <div>
                <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
                  {language === 'ru' ? 'Выберите услугу *' : 'Қызметті таңдаңыз *'}
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

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 mr-2 animate-spin" />
                    {language === 'ru' ? 'Отправка...' : 'Жіберілуде...'}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {language === 'ru' ? 'Получить расчет' : 'Баға алу'}
                  </>
                )}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                {language === 'ru' 
                  ? 'Нажимая кнопку, вы соглашаетесь с обработкой персональных данных'
                  : 'Түймені басу арқылы сіз жеке деректерді өңдеуге келісесіз'
                }
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}