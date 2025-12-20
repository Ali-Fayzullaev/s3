'use client'

import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter, 
  Car 
} from 'lucide-react'
import { useApp } from '../lib/context'

export default function Footer() {
  const { t } = useApp()

  const contactInfo = [
    {
      icon: Phone,
      title: t('phone'),
      info: '+7 (777) 123-45-67',
      link: 'tel:+77771234567'
    },
    {
      icon: Mail,
      title: t('email'),
      info: 'info@detailpro.kz',
      link: 'mailto:info@detailpro.kz'
    },
    {
      icon: MapPin,
      title: t('address'),
      info: 'г. Алматы, ул. Примерная, 123',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Режим работы',
      info: 'Пн-Сб: 9:00 - 19:00',
      link: '#'
    }
  ]

  const services = [
    'Тонировка',
    'Бронепленка',
    'Керамическое покрытие',
    'Полировка',
    'Химчистка',
    'Оплетка руля'
  ]

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ]

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-card-foreground">DetailPro</span>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Профессиональный автодетейлинг с гарантией качества. 
              Превращаем ваш автомобиль в произведение искусства.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-6">
              Наши услуги
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-6">
              Навигация
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  {t('home')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  {t('services')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  {t('about')}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  {t('faq')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-6">
              {t('contactTitle')}
            </h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 text-primary shrink-0 mt-1">
                      <IconComponent className="w-full h-full" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-card-foreground">
                        {contact.title}
                      </div>
                      {contact.link.startsWith('#') ? (
                        <div className="text-sm text-muted-foreground">
                          {contact.info}
                        </div>
                      ) : (
                        <a 
                          href={contact.link}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {contact.info}
                        </a>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 DetailPro. Все права защищены.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}