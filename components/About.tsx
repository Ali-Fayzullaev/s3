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
      title: t('premiumQuality'),
      description: t('premiumQualityDesc')
    },
    {
      icon: Users,
      title: t('experiencedTeam'),
      description: t('experiencedTeamDesc')
    },
    {
      icon: Clock,
      title: t('fastService'),
      description: t('fastServiceDesc')
    },
    {
      icon: Shield,
      title: t('qualityGuarantee'),
      description: t('qualityGuaranteeDesc')
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
    <section id="about" className="py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              <span>{t('ourHistory')}</span>
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
              {t('learnMoreAboutUs')}
            </button>
            </Link>
          </div>

          {/* Visual Gallery */}
          <div className="relative flex justify-center items-center">
            {/* Animated Gallery */}
            <div className="gallery">
              {galleryImages.slice(0, 5).map((image, index) => (
                <img 
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                />
              ))}
            </div>
            
            {/* See More Button */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
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

      {/* Gallery Styles */}
      <style jsx>{`
        .gallery {
          --d: 8s; /* duration */
          display: grid;
          width: 280px;
          height: 280px;
          margin: 40px auto;
        }

        .gallery-image {
          grid-area: 1/1;
          width: 100%;
          height: 100%;
          aspect-ratio: 1;
          object-fit: cover;
          border: 8px solid hsl(var(--card));
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(220, 38, 38, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
          z-index: 2;
          animation: 
            slide var(--d) infinite,
            z-order var(--d) infinite steps(1);
          transition: transform 0.3s ease;
        }

        .gallery-image:hover {
          transform: scale(1.05) !important;
        }

        .gallery-image:last-child {
          animation-name: slide, z-order-last;
        }

        /* Individual delays and rotations */
        .gallery-image:nth-child(1) {
          animation-delay: calc(-4/5*var(--d));
          --r: -15deg;
        }

        .gallery-image:nth-child(2) {
          animation-delay: calc(-3/5*var(--d));
          --r: 8deg;
        }

        .gallery-image:nth-child(3) {
          animation-delay: calc(-2/5*var(--d));
          --r: -12deg;
        }

        .gallery-image:nth-child(4) {
          animation-delay: calc(-1/5*var(--d));
          --r: 18deg;
        }

        .gallery-image:nth-child(5) {
          animation-delay: calc(0/5*var(--d));
          --r: -8deg;
        }

        @keyframes slide {
          10% { transform: translateX(120%) rotate(var(--r)); }
          0%, 100%, 20% { transform: translateX(0%) rotate(var(--r)); }
        }

        @keyframes z-order {
          10%, 20% { z-index: 1; }
          80% { z-index: 2; }
        }

        @keyframes z-order-last {
          10%, 20% { z-index: 1; }
          90% { z-index: 2; }
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .gallery {
            width: 220px;
            height: 220px;
          }
        }
      `}</style>

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