'use client'

import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Send,
  Map,
  Navigation,
  ExternalLink
} from 'lucide-react'
import { useApp } from '../lib/context'
import { COMPANY_CONFIG, getWhatsAppLink, getGoogleMapsLink, getDoubleGisLink } from '../lib/company-config'
import Image from 'next/image'

export default function Footer() {
  const { t, language } = useApp()

  const contactInfo = [
    {
      icon: Phone,
      title: 'Основной телефон',
      info: COMPANY_CONFIG.contacts.phone.main,
      link: `tel:${COMPANY_CONFIG.contacts.phone.formatted}`
    },
    {
      icon: MapPin,
      title: t('address'),
      info: COMPANY_CONFIG.contacts.address.full,
      link: getGoogleMapsLink()
    },
  ]

  const additionalPhones = COMPANY_CONFIG.contacts.additionalPhones.map(phone => ({
    phone,
    link: `tel:${phone.replace(/[^\d+]/g, '')}`
  }))

  const socialLinks = [
    { 
      icon: Instagram, 
      href: COMPANY_CONFIG.social.instagram.url, 
      label: 'Instagram',
      handle: COMPANY_CONFIG.social.instagram.handle
    },
    { 
      icon: Send, 
      href: COMPANY_CONFIG.social.telegram.url, 
      label: 'Telegram',
      handle: '+7 747 144 01 00'
    }
  ]

  const mapLinks = [
    {
      icon: Map,
      title: 'Google Maps',
      href: getGoogleMapsLink()
    },
    {
      icon: Navigation,
      title: '2GIS',
      href: getDoubleGisLink()
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

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center">
                <Image src="/logo.png" height={34} width={34} className='rounded-full' alt="S3" /> {/* Update with actual path and alt text */}
              </div>
              <div>
                <span className="text-xl font-bold text-card-foreground">{COMPANY_CONFIG.name}</span>
                <div className="text-xs text-muted-foreground">PREMIUM DETAILING</div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {COMPANY_CONFIG.description}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 group"
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                )
              })}
            </div>

            {/* WhatsApp Quick Contact */}
            <a
              href={getWhatsAppLink('Здравствуйте! Интересует детейлинг автомобиля.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-300"
            >
              <Send className="w-4 h-4 mr-2" />
              Написать в WhatsApp
            </a>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-6">
              {t('contactTitle')}
            </h3>
            
            <div className="space-y-4 mb-6">
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
                          target={contact.link.startsWith('http') ? '_blank' : undefined}
                          rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
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

            {/* Additional Phones */}
            <div className="border-t border-border pt-4">
              <h4 className="text-sm font-medium text-card-foreground mb-3">Дополнительные номера</h4>
              <div className="space-y-2">
                {additionalPhones.map((phone, index) => (
                  <a
                    key={index}
                    href={phone.link}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {phone.phone}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services & Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-6">
              Наши услуги
            </h3>
            <ul className="space-y-3 mb-8">
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

            <h4 className="text-sm font-semibold text-card-foreground mb-3">
              Навигация
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  {t('home')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  {t('about')}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  {t('faq')}
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Maps */}
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-6">
              Как нас найти
            </h3>
            
            <div className="bg-muted/50 rounded-xl p-4 mb-6">
              <div className="text-sm font-medium text-card-foreground mb-2">
                📍 Наш адрес
              </div>
              <div className="text-sm text-muted-foreground mb-4">
                {COMPANY_CONFIG.contacts.address.full}
              </div>
              
              <div className="space-y-3">
                {mapLinks.map((map, index) => {
                  const IconComponent = map.icon
                  return (
                    <a
                      key={index}
                      href={map.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-colors duration-200"
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{map.title}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 {COMPANY_CONFIG.name}. Все права защищены.
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