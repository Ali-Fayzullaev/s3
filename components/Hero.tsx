'use client'

import { ArrowRight, Play, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { useApp } from '../lib/context'
import { COMPANY_CONFIG } from '../lib/company-config'
import QuoteModal from './QuoteModal'
import VideoModal from './VideoModal'

export default function Hero() {
  const { t, theme } = useApp()
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  // Выбираем фоновое изображение в зависимости от темы
  const backgroundImage = theme === 'dark' ? '/fon_dark_hero.jpg' : '/fon_light_hero.jpg'

  const handleWhatsAppClick = () => {
    const phoneNumber = '+77777777777' // Замените на ваш номер WhatsApp
    const message = 'Здравствуйте! Интересуюсь услугами детейлинга'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />
        
        {/* Professional Overlays - заменяем градиенты */}
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/50 rounded-full animate-ping delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/20 rounded-full animate-bounce delay-500" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary/40 rounded-full animate-pulse delay-2000" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium mb-8 fade-in-up border border-white/20 shadow-xl">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
              <span>{COMPANY_CONFIG.name} - {t('premiumDetailing')}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-white mb-6 md:mb-8 leading-tight slide-in-left">
              <span className="text-white drop-shadow-2xl">
                {t('heroTitle')}
              </span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 mb-8 md:mb-10 max-w-2xl fade-in-up leading-relaxed font-light">
              {t('heroSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start fade-in-up">
              {/* Кнопка "Получить расчет" */}
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="group relative bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">{t('getQuote')}</span>
                <ArrowRight className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              
              {/* Кнопка для мобильных - "Наши работы" */}
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="group relative bg-white/15 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/25 hover:border-white/50 px-6 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-all duration-500 flex items-center justify-center md:hidden"
              >
                <Play className="mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6 group-hover:scale-125 transition-transform duration-300" />
                <span>{t('ourWork')}</span>
              </button>

              {/* Кнопка для десктопа - WhatsApp */}
              <button 
                onClick={handleWhatsAppClick}
                className="group relative bg-green-600 hover:bg-green-700 text-white px-6 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl items-center justify-center overflow-hidden hidden md:flex"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <MessageCircle className="mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6 relative z-10" />
                <span className="relative z-10">WhatsApp</span>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/20 fade-in-up">
              <div className="text-center group">
                <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white drop-shadow-xl mb-1 md:mb-2 group-hover:text-primary transition-colors duration-300">1000+</div>
                <div className="text-xs md:text-sm text-white/80 font-medium">{t('happyClients')}</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white drop-shadow-xl mb-1 md:mb-2 group-hover:text-primary transition-colors duration-300">5+</div>
                <div className="text-xs md:text-sm text-white/80 font-medium">{t('yearsExperience')}</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white drop-shadow-xl mb-1 md:mb-2 group-hover:text-primary transition-colors duration-300">10</div>
                <div className="text-xs md:text-sm text-white/80 font-medium">{t('typesOfServices')}</div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual Content with Video - скрыто на мобильных */}
          <div className="relative lg:ml-8 hidden md:block">
            <div className="relative group">
              {/* Video Card - уменьшенный размер для десктопа */}
              <div className="relative w-full h-[350px] lg:h-[400px] bg-black/20 backdrop-blur-xl rounded-2xl overflow-hidden transform group-hover:scale-105 transition-all duration-700 border border-white/20 shadow-2xl">
                {/* Background Video */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient background on error
                    e.currentTarget.style.display = 'none'
                  }}
                >
                  <source src="/s3_hero_video.mp4" type="video/mp4" />
                </video>
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40" />
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-white/60 text-xs font-medium tracking-wider">{t('scrollDown')}</div>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/80 rounded-full animate-bounce mt-2" />
          </div>
        </div>
      </div>

      {/* Video Status Indicator for main video */}
      <div className="absolute bottom-6 right-6 z-30 opacity-60 hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white text-xs font-bold tracking-wide">S3 SHOWCASE</span>
        </div>
      </div>

      {/* Модальные окна */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </section>
  )
}