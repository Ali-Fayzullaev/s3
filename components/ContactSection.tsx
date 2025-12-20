'use client'

import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Navigation,
  ExternalLink,
  Send,
  Copy,
  Check,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2
} from 'lucide-react'
import { useState } from 'react'
import { useApp } from '../lib/context'
import { COMPANY_CONFIG, getWhatsAppLink, getGoogleMapsLink, getDoubleGisLink } from '../lib/company-config'

export default function ContactSection() {
  const { t, language } = useApp()
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null)
  const [isMapExpanded, setIsMapExpanded] = useState(false)
  const [mapZoom, setMapZoom] = useState(15)

  const copyToClipboard = async (text: string, phone: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedPhone(phone)
      setTimeout(() => setCopiedPhone(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const allPhones = [
    { label: 'Основной', phone: COMPANY_CONFIG.contacts.phone.main, formatted: COMPANY_CONFIG.contacts.phone.formatted },
    ...COMPANY_CONFIG.contacts.additionalPhones.map(phone => ({
      label: 'Дополнительный',
      phone,
      formatted: phone.replace(/[^\d+]/g, '')
    }))
  ]

  const handleZoomIn = () => {
    if (mapZoom < 20) {
      setMapZoom(prev => prev + 1)
    }
  }

  const handleZoomOut = () => {
    if (mapZoom > 10) {
      setMapZoom(prev => prev - 1)
    }
  }

  const toggleMapExpanded = () => {
    setIsMapExpanded(!isMapExpanded)
  }

  const getMapUrl = () => {
    const { lat, lng } = COMPANY_CONFIG.contacts.address.coordinates
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgaN2l6l0&q=${lat},${lng}&zoom=${mapZoom}&maptype=roadmap&language=ru&region=KZ`
  }

  return (
    <>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Найдите нас</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {t('contactTitle')}
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами удобным способом или посетите наш детейлинг-центр в Шымкент
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Address Card */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-card-foreground mb-2">Наш адрес</h3>
                    <p className="text-muted-foreground mb-4">{COMPANY_CONFIG.contacts.address.full}</p>
                    
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={getGoogleMapsLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg transition-colors duration-300"
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        Google Maps
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                      
                      <a
                        href={getDoubleGisLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-lg transition-colors duration-300"
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        2GIS
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phones Card */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">Телефоны</h3>
                </div>
                
                <div className="space-y-4">
                  {allPhones.map((phoneData, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                      <div>
                        <div className="text-sm text-muted-foreground">{phoneData.label}</div>
                        <div className="font-semibold text-card-foreground">{phoneData.phone}</div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <a
                          href={`tel:${phoneData.formatted}`}
                          className="p-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors duration-300"
                          title="Позвонить"
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                        
                        <button
                          onClick={() => copyToClipboard(phoneData.phone, phoneData.phone)}
                          className="p-2 bg-secondary hover:bg-accent text-secondary-foreground rounded-lg transition-colors duration-300"
                          title="Копировать"
                        >
                          {copiedPhone === phoneData.phone ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-6 pt-6 border-t border-border">
                  <a
                    href={getWhatsAppLink('Здравствуйте! Интересует детейлинг автомобиля.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Написать в WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
                <div className="p-6 border-b border-border flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">Мы на карте</h3>
                    <p className="text-sm text-muted-foreground">Интерактивная карта с управлением</p>
                  </div>
                  
                  {/* Map Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleZoomOut}
                      className="p-2 bg-secondary hover:bg-accent text-secondary-foreground rounded-lg transition-colors duration-300"
                      title="Уменьшить"
                      disabled={mapZoom <= 10}
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    
                    <span className="text-sm font-medium text-muted-foreground px-2">
                      {mapZoom}x
                    </span>
                    
                    <button
                      onClick={handleZoomIn}
                      className="p-2 bg-secondary hover:bg-accent text-secondary-foreground rounded-lg transition-colors duration-300"
                      title="Увеличить"
                      disabled={mapZoom >= 20}
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={toggleMapExpanded}
                      className="p-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors duration-300"
                      title={isMapExpanded ? "Свернуть" : "Развернуть"}
                    >
                      {isMapExpanded ? (
                        <Minimize2 className="w-4 h-4" />
                      ) : (
                        <Maximize2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
                
                <div className={`relative ${isMapExpanded ? 'h-[600px]' : 'h-96'} transition-all duration-500`}>
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.123456789!2d${COMPANY_CONFIG.contacts.address.coordinates.lng}!3d${COMPANY_CONFIG.contacts.address.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a8e5520991144d%3A0x3deef045fe1134e9!2sS3%20DETAILING!5e0!3m2!1sru!2skz!4v1640995200000!5m2!1sru!2skz&z=${mapZoom}`}
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="S3 DETAILING на карте"
                    key={mapZoom} // Force re-render when zoom changes
                  />
                  
                  {/* Map Info Overlay */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg max-w-xs">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-primary-foreground font-bold text-sm">S3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm">{COMPANY_CONFIG.name}</h4>
                        <p className="text-xs text-gray-600 mb-2">{COMPANY_CONFIG.contacts.address.district}</p>
                        <div className="text-xs text-gray-500">
                          📞 {COMPANY_CONFIG.contacts.phone.main}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* External Links Overlay */}
                  <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
                    <a
                      href={getGoogleMapsLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded-lg transition-colors duration-300 shadow-lg"
                    >
                      <Navigation className="w-3 h-3 mr-1" />
                      Google Maps
                      <ExternalLink className="w-2 h-2 ml-1" />
                    </a>
                    
                    <a
                      href={getDoubleGisLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white text-xs rounded-lg transition-colors duration-300 shadow-lg"
                    >
                      <Navigation className="w-3 h-3 mr-1" />
                      2GIS
                      <ExternalLink className="w-2 h-2 ml-1" />
                    </a>
                  </div>
                </div>

                {/* Map Footer */}
                <div className="p-4 bg-muted/30 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      📍 {COMPANY_CONFIG.contacts.address.full}
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => {
                          const coords = `${COMPANY_CONFIG.contacts.address.coordinates.lat},${COMPANY_CONFIG.contacts.address.coordinates.lng}`
                          navigator.clipboard.writeText(coords)
                          setCopiedPhone('coordinates')
                          setTimeout(() => setCopiedPhone(null), 2000)
                        }}
                        className="text-xs text-primary hover:text-primary/80 transition-colors duration-200"
                      >
                        {copiedPhone === 'coordinates' ? (
                          <Check className="w-3 h-3" />
                        ) : (
                          <>Копировать координаты</>
                        )}
                      </button>
                      
                      <a
                        href={getWhatsAppLink(`Здравствуйте! Хочу посетить ваш детейлинг-центр по адресу: ${COMPANY_CONFIG.contacts.address.full}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs rounded-md transition-colors duration-300"
                      >
                        <Send className="w-3 h-3 mr-1" />
                        Маршрут в WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    const googleMapsApp = `https://maps.google.com/maps?daddr=${COMPANY_CONFIG.contacts.address.coordinates.lat},${COMPANY_CONFIG.contacts.address.coordinates.lng}`
                    window.open(googleMapsApp, '_blank')
                  }}
                  className="flex items-center justify-center px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Маршрут
                </button>
                
                <button
                  onClick={() => {
                    const phoneNumber = COMPANY_CONFIG.contacts.phone.formatted
                    window.open(`tel:${phoneNumber}`)
                  }}
                  className="flex items-center justify-center px-4 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Позвонить
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Map Modal */}
      {isMapExpanded && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-6xl h-[90vh] bg-card rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <h3 className="text-lg font-bold text-card-foreground">
                {COMPANY_CONFIG.name} - Интерактивная карта
              </h3>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleZoomOut}
                  className="p-2 bg-secondary hover:bg-accent text-secondary-foreground rounded-lg transition-colors duration-300"
                  disabled={mapZoom <= 10}
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                
                <span className="text-sm font-medium text-muted-foreground px-2">
                  {mapZoom}x
                </span>
                
                <button
                  onClick={handleZoomIn}
                  className="p-2 bg-secondary hover:bg-accent text-secondary-foreground rounded-lg transition-colors duration-300"
                  disabled={mapZoom >= 20}
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                
                <button
                  onClick={toggleMapExpanded}
                  className="p-2 bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-lg transition-colors duration-300"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="h-[calc(100%-80px)] relative">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.123456789!2d${COMPANY_CONFIG.contacts.address.coordinates.lng}!3d${COMPANY_CONFIG.contacts.address.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a8e5520991144d%3A0x3deef045fe1134e9!2sS3%20DETAILING!5e0!3m2!1sru!2skz!4v1640995200000!5m2!1sru!2skz&z=${mapZoom}`}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="S3 DETAILING на карте - полноэкранный режим"
                key={`fullscreen-${mapZoom}`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}