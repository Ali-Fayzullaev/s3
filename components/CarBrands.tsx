// components/CarBrands.tsx
'use client'

import { useApp } from '../lib/context'

export default function CarBrands() {
  const { t, theme } = useApp()

  const brands = [
    { name: 'Audi', logo: '/marka_car/Audi_svg.png' },
    { name: 'BMW', logo: '/marka_car/bmw_logo_icon_145840 1.png' },
    { name: 'Chevrolet', logo: '/marka_car/chevrolet.png' },
    { name: 'Ford', logo: '/marka_car/ford.png' },
    { name: 'Honda', logo: '/marka_car/honda.png' },
    { name: 'Hyundai', logo: '/marka_car/hyundai.png' },
    { name: 'Kia', logo: '/marka_car/kia.png' },
    { name: 'Mercedes-Benz', logo: '/marka_car/mercedes_benz.png' },
    { name: 'Nissan', logo: '/marka_car/nissan.png' },
    { name: 'Tesla', logo: '/marka_car/tesla.png' },
    { name: 'Volkswagen', logo: '/marka_car/volkswagen.png' }
  ]
  
  // Дублируем бренды для бесконечной прокрутки
  const duplicatedBrands = [...brands, ...brands, ...brands]

  // Определяем CSS фильтр для логотипов в зависимости от темы
  const logoFilter = theme === 'dark' 
    ? 'brightness(0) invert(1) brightness(0.9) contrast(1.2)' // Делаем логотипы белыми в темном режиме
    : 'brightness(0.8) contrast(1.1)' // Немного затемняем в светлом режиме

  return (
    <section className="py-20 px-4 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
            {t('automotiveBrands')}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
            {t('workWithAllBrands')}{' '}
            <span className="text-primary">{t('allBrands')}</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            {t('ourMasters')}
          </p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* First Row - Left to Right */}
          <div className="overflow-hidden mb-8">
            <div className="flex animate-scroll">
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`row1-${index}`}
                  className="shrink-0 mx-6"
                >
                  <div className="group relative w-32 h-32 bg-card border border-border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center p-4">
                    {/* Logo */}
                    <div className="w-16 h-16 flex items-center justify-center mb-2">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                        style={{ filter: logoFilter }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                    
                    {/* Brand Name */}
                    <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300 text-center">
                      {brand.name}
                    </span>
                    
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="overflow-hidden mb-8">
            <div className="flex animate-scroll-reverse">
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`row2-${index}`}
                  className="shrink-0 mx-6"
                >
                  <div className="group relative w-32 h-32 bg-card border border-border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center p-4">
                    {/* Logo */}
                    <div className="w-16 h-16 flex items-center justify-center mb-2">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                        style={{ filter: logoFilter }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                    
                    {/* Brand Name */}
                    <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300 text-center">
                      {brand.name}
                    </span>
                    
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Third Row - Left to Right (Slower) */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-slow">
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`row3-${index}`}
                  className="shrink-0 mx-6"
                >
                  <div className="group relative w-32 h-32 bg-card border border-border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center p-4">
                    {/* Logo */}
                    <div className="w-16 h-16 flex items-center justify-center mb-2">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                        style={{ filter: logoFilter }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                    
                    {/* Brand Name */}
                    <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300 text-center">
                      {brand.name}
                    </span>
                    
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-8 bg-card border border-border rounded-2xl shadow-lg mb-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t('otherBrands')}
              </h3>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground font-medium">{t('europeanBrands')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse delay-200"></div>
                  <span className="text-muted-foreground font-medium">{t('americanBrands')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse delay-500"></div>
                  <span className="text-muted-foreground font-medium">{t('asianBrands')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse delay-700"></div>
                  <span className="text-muted-foreground font-medium">{t('premiumSegment')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse delay-1000"></div>
                  <span className="text-muted-foreground font-medium">{t('electricVehicles')}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6 rounded-2xl">
            <p className="text-lg font-semibold">
              {t('yourCarDeserves')}
            </p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        @keyframes scroll-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 50s linear infinite;
          width: max-content;
        }
        
        .animate-scroll-reverse {
          animation: scroll-reverse 60s linear infinite;
          width: max-content;
        }
        
        .animate-scroll-slow {
          animation: scroll-slow 50s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  )
}