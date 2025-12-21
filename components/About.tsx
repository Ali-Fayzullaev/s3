'use client'

import { Award, Users, Clock, Shield, Eye, X } from 'lucide-react'
import { useApp } from '../lib/context'
import Link from 'next/link'
import { useState } from 'react'

export default function About() {
  const { t } = useApp()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const features = [
    {
      icon: Award,
      title: 'Премиум качество',
      description: 'Используем только лучшие материалы и оборудование'
    },
    {
      icon: Users,
      title: 'Опытная команда',
      description: 'Сертифицированные мастера с многолетним опытом'
    },
    {
      icon: Clock,
      title: 'Быстрый сервис',
      description: 'Выполняем работы в оговоренные сроки'
    },
    {
      icon: Shield,
      title: 'Гарантия качества',
      description: 'Предоставляем гарантию на все виды работ'
    }
  ]

  const galleryImages = [
    { src: '/ourWork/concierge_Full_Detail.jpg', alt: 'Консьерж полный детейлинг', category: 'Полный сервис' },
    { src: '/ourWork/mirror_Finish_Polishing.jpg', alt: 'Зеркальная полировка', category: 'Полировка' },
    { src: '/ourWork/interior_Ceramic_Coating.jpg', alt: 'Керамическое покрытие интерьера', category: 'Керамика' },
    { src: '/ourWork/paint_Protection_Armor.jpg', alt: 'Защитная броня кузова', category: 'Защита' },
    { src: '/ourWork/cleaning.jpg', alt: 'Химчистка салона', category: 'Чистка' },
    { src: '/ourWork/hand_Stitched_Steering_Wheel_Wrap.jpg', alt: 'Перетяжка руля ручной работы', category: 'Реставрация' },
    { src: '/ourWork/hybrid_Paint_Correction.jpg', alt: 'Гибридная коррекция краски', category: 'Коррекция' },
    { src: '/ourWork/premium_Sound_Deadening.jpg', alt: 'Премиальная шумоизоляция', category: 'Тюнинг' },
    { src: '/ourWork/tinting.jpg', alt: 'Тонировка стекол', category: 'Тонировка' }
  ]

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              <span>Наша история</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {t('aboutTitle')}
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('aboutText')}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Link href="/about">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Узнать больше о нас
            </button>
            </Link>
          </div>

          {/* Visual Gallery */}
          <div className="relative">
            {/* Main Gallery Grid */}
            <div className="grid grid-cols-6 gap-4 h-96">
              {/* Большое изображение слева */}
              <div 
                className="col-span-4 row-span-2 relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02]"
                onClick={() => setSelectedImage(galleryImages[0].src)}
              >
                <img 
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-medium">{galleryImages[0].category}</span>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* View Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary/90 backdrop-blur-sm p-3 rounded-full">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Image Title */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold mb-1">{galleryImages[0].alt}</h3>
                  <p className="text-sm opacity-90">Премиум детейлинг услуги</p>
                </div>
              </div>

              {/* Правая колонка - 4 средних изображения */}
              <div className="col-span-2 grid grid-rows-4 gap-4">
                {galleryImages.slice(1, 5).map((image, index) => (
                  <div 
                    key={index + 1}
                    className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-2 left-2 bg-primary/90 backdrop-blur-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-xs font-medium">{image.category}</span>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* View Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-primary/90 backdrop-blur-sm p-2 rounded-full">
                        <Eye className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    {/* Image Title */}
                    <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs font-semibold truncate">{image.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Нижний ряд - 4 одинаковых изображения */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              {galleryImages.slice(5, 9).map((image, index) => (
                <div 
                  key={index + 5}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 h-32"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-2 left-2 bg-primary/90 backdrop-blur-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs font-medium">{image.category}</span>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* View Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-primary/90 backdrop-blur-sm p-2 rounded-full">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  {/* Image Title */}
                  <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs font-semibold truncate">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* See More Button */}
            <div className="text-center mt-6">
              <Link href="/about">
                <button className="inline-flex items-center px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl font-medium transition-all duration-200 transform hover:scale-105">
                  <Eye className="w-4 h-4 mr-2" />
                  Посмотреть портфолио
                </button>
              </Link>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-8 -right-8 bg-card rounded-2xl p-6 shadow-xl border border-border z-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-card rounded-2xl p-6 shadow-xl border border-border z-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-full transition-colors duration-200 z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            {/* Image */}
            <img 
              src={selectedImage}
              alt="Наши работы"
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Image Navigation Hint */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
              <p className="text-white text-sm">Нажмите вне изображения, чтобы закрыть</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}