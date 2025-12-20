'use client'

import Image from 'next/image'
import { useApp } from '../lib/context'

export default function CarBrands() {
  const { t } = useApp()

  const carBrands = [
    {
      name: 'BMW',
      logo: '/marka_car/bmw_logo_icon_145840 1.png',
      alt: 'BMW логотип'
    },
    {
      name: 'Mercedes-Benz',
      logo: '/marka_car/mercedes_benz.png',
      alt: 'Mercedes-Benz логотип'
    },
    {
      name: 'Audi',
      logo: '/marka_car/Audi_svg.png',
      alt: 'Audi логотип'
    },
    {
      name: 'Tesla',
      logo: '/marka_car/tesla.png',
      alt: 'Tesla логотип'
    },
    {
      name: 'Volkswagen',
      logo: '/marka_car/volkswagen.png',
      alt: 'Volkswagen логотип'
    },
    {
      name: 'Toyota',
      logo: '/marka_car/honda.png',
      alt: 'Honda логотип'
    },
    {
      name: 'Hyundai',
      logo: '/marka_car/hyundai.png',
      alt: 'Hyundai логотип'
    },
    {
      name: 'KIA',
      logo: '/marka_car/kia.png',
      alt: 'KIA логотип'
    },
    {
      name: 'Nissan',
      logo: '/marka_car/nissan.png',
      alt: 'Nissan логотип'
    },
    {
      name: 'Ford',
      logo: '/marka_car/ford.png',
      alt: 'Ford логотип'
    },
    {
      name: 'Chevrolet',
      logo: '/marka_car/chevrolet.png',
      alt: 'Chevrolet логотип'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Доверие брендов
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Работаем с <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">любыми марками</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Наши мастера имеют опыт работы с автомобилями всех популярных брендов. 
            От экономкласса до премиум-сегмента - мы знаем особенности каждой марки.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="relative">
          {/* Infinite Scroll Animation */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-12 mb-12">
              {[...carBrands, ...carBrands].map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="group flex-shrink-0 w-32 h-32 bg-card rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 border border-border hover:border-primary/30"
                >
                  <div className="relative w-20 h-20">
                    <Image
                      src={brand.logo}
                      alt={brand.alt}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:brightness-110"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Second row with reverse animation */}
            <div className="flex animate-scroll-reverse space-x-12">
              {[...carBrands.slice().reverse(), ...carBrands.slice().reverse()].map((brand, index) => (
                <div
                  key={`reverse-${brand.name}-${index}`}
                  className="group flex-shrink-0 w-32 h-32 bg-card rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 border border-border hover:border-primary/30"
                >
                  <div className="relative w-20 h-20">
                    <Image
                      src={brand.logo}
                      alt={brand.alt}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:brightness-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <span className="text-2xl group-hover:scale-125 transition-transform duration-300">🔧</span>
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-2">Индивидуальный подход</h3>
            <p className="text-muted-foreground">
              Учитываем особенности каждой марки и модели автомобиля
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <span className="text-2xl group-hover:scale-125 transition-transform duration-300">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-2">Современные технологии</h3>
            <p className="text-muted-foreground">
              Используем передовые материалы и оборудование для всех марок
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <span className="text-2xl group-hover:scale-125 transition-transform duration-300">🛡️</span>
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-2">Гарантия качества</h3>
            <p className="text-muted-foreground">
              Предоставляем гарантию на все виды работ независимо от марки авто
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Не видите свою марку?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Мы работаем с автомобилями любых марок и моделей. Свяжитесь с нами, и мы подберем оптимальные услуги для вашего авто.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Узнать подробности
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary/3 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  )
}