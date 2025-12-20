'use client'

import { ArrowRight, Play } from 'lucide-react'
import { useApp } from '../lib/context'
import { COMPANY_CONFIG } from '../lib/company-config'

export default function Hero() {
  const { t } = useApp()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Fallback Image */}
      <div className="absolute inset-0 z-0">
        {/* Fallback Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero_fon.jpg')"
          }}
        />
        
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            // Hide video on error, fallback to background image
            e.currentTarget.style.display = 'none'
          }}
        >
          <source src="/s3_hero_video.mp4" type="video/mp4" />
        </video>
        
        {/* Professional Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
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
              <span>✨ {COMPANY_CONFIG.name} - Премиум детейлинг</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight slide-in-left">
              <span className="bg-gradient-to-r from-white via-white to-primary/80 bg-clip-text text-transparent drop-shadow-2xl">
                {t('heroTitle')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl fade-in-up leading-relaxed font-light">
              {COMPANY_CONFIG.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start fade-in-up">
              <button className="group relative bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">{t('getQuote')}</span>
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              
              <button className="group relative bg-white/15 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/25 hover:border-white/50 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 flex items-center justify-center">
                <Play className="mr-3 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                <span>{t('ourWork')}</span>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20 fade-in-up">
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-black text-white drop-shadow-xl mb-2 group-hover:text-primary transition-colors duration-300">1000+</div>
                <div className="text-sm text-white/80 font-medium">Довольных клиентов</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-black text-white drop-shadow-xl mb-2 group-hover:text-primary transition-colors duration-300">7+</div>
                <div className="text-sm text-white/80 font-medium">Лет опыта</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-black text-white drop-shadow-xl mb-2 group-hover:text-primary transition-colors duration-300">10</div>
                <div className="text-sm text-white/80 font-medium">Видов услуг</div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual Content */}
          <div className="relative lg:ml-8">
            <div className="relative group">
              {/* Main Showcase Card */}
              <div className="relative w-full h-[500px] bg-white/5 backdrop-blur-xl rounded-3xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-700 border border-white/20 shadow-2xl overflow-hidden">
                {/* Card Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-primary/20" />
                  <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] bg-[size:20px_20px]" />
                </div>
                
                <div className="relative z-10 text-center px-8">
                  <div className="relative mb-8">
                    <div className="w-40 h-40 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                      <span className="text-primary-foreground font-black text-5xl">S3</span>
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 w-40 h-40 bg-primary/30 rounded-full blur-xl mx-auto animate-pulse" />
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-3 drop-shadow-xl">{COMPANY_CONFIG.name}</h3>
                  <p className="text-white/80 text-lg font-medium mb-6">Premium Detailing Studio</p>
                  
                  <div className="inline-block px-6 py-3 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/40">
                    <span className="text-white font-bold text-sm flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                      Алматы • Белые воды
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Achievement Badges */}
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce border-4 border-white/20 shadow-xl">
                <span className="text-3xl">🏆</span>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse border-4 border-white/20 shadow-xl">
                <span className="text-2xl">⭐</span>
              </div>
              
              <div className="absolute top-1/4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center animate-ping border-4 border-white/20 shadow-xl">
                <span className="text-lg">💎</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-white/60 text-xs font-medium tracking-wider">ПРОКРУТИТЕ ВНИЗ</div>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/80 rounded-full animate-bounce mt-2" />
          </div>
        </div>
      </div>

      {/* Video Status Indicator */}
      <div className="absolute bottom-6 right-6 z-30 opacity-60 hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-white text-xs font-bold tracking-wide">S3 DETAILING</span>
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse opacity-50" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000 opacity-30" />
    </section>
  )
}