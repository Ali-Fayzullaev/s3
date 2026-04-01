'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { 
  Shield, 
  Sparkles, 
  Palette, 
  Circle, 
  Star, 
  Droplets, 
  Square, 
  Layers, 
  Settings, 
  VolumeX,
  ArrowRight
} from 'lucide-react'
import { useApp } from '../lib/context'
import { getWhatsAppConsultLink } from '../lib/company-config'
import ServiceModal from './ServiceModal'

export default function Services() {
  const { t, language } = useApp()
  const [modalState, setModalState] = useState({
    isOpen: false,
    serviceName: '',
    serviceId: ''
  })

  const openModal = (serviceName: string, serviceId: string) => {
    setModalState({
      isOpen: true,
      serviceName,
      serviceId
    })
  }

  const closeModal = () => {
    setModalState({
      isOpen: false,
      serviceName: '',
      serviceId: ''
    })
  }

  const services = [
    {
      id: 'tinting',
      title: t('tinting'),
      description: t('tintingDesc'),
      icon: Shield,
      image: '/service/tinting.jpg',
      gradient: 'from-blue-500/20 to-blue-600/20'
    },
    {
      id: 'ppf',
      title: t('ppf'),
      description: t('ppfDesc'),
      icon: Shield,
      image: '/service/paint_Protection_Armor.jpg',
      gradient: 'from-green-500/20 to-green-600/20'
    },
    {
      id: 'detailing',
      title: t('detailing'),
      description: t('detailingDesc'),
      icon: Sparkles,
      image: '/service/cleaning.jpg',
      gradient: 'from-purple-500/20 to-purple-600/20'
    },
    {
      id: 'lamination',
      title: t('lamination'),
      description: t('laminationDesc'),
      icon: Layers,
      image: '/service/interior_Ceramic_Coating.jpg',
      gradient: 'from-yellow-500/20 to-yellow-600/20'
    },
    {
      id: 'polishing',
      title: t('polishing'),
      description: t('polishingDesc'),
      icon: Circle,
      image: '/service/mirror_Finish_Polishing.jpg',
      gradient: 'from-pink-500/20 to-pink-600/20'
    },
    {
      id: 'ceramic',
      title: t('ceramic'),
      description: t('ceramicDesc'),
      icon: Droplets,
      image: '/service/hybrid_Paint_Correction.jpg',
      gradient: 'from-cyan-500/20 to-cyan-600/20'
    },
    {
      id: 'antichrome',
      title: t('antichrome'),
      description: t('antichromeDesc'),
      icon: Square,
      image: '/service/concierge_Full_Detail.jpg',
      gradient: 'from-gray-500/20 to-gray-600/20'
    },
    {
      id: 'combined',
      title: t('combined'),
      description: t('combinedDesc'),
      icon: Star,
      image: '/service/hybrid_Paint_Correction.jpg',
      gradient: 'from-orange-500/20 to-orange-600/20'
    },
    {
      id: 'steeringWheel',
      title: t('steeringWheel'),
      description: t('steeringWheelDesc'),
      icon: Settings,
      image: '/service/hand_Stitched_Steering_Wheel_Wrap.jpg',
      gradient: 'from-red-500/20 to-red-600/20'
    },
    {
      id: 'soundproofing',
      title: t('soundproofing'),
      description: t('soundproofingDesc'),
      icon: VolumeX,
      image: '/service/premium_Sound_Deadening.jpg',
      gradient: 'from-indigo-500/20 to-indigo-600/20'
    }
  ]

  return (
    <>
      <section id="services" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
              {t('premiumDetailing')}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
              {t('professionalServices')}{' '}
              <span className="text-primary">{t('forYourCar')}</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('servicesDescription')}
            </p>
            
            <div className="w-32 h-1 bg-primary mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              
              return (
                <div
                  key={service.id}
                  className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-linear-to-br ${service.gradient}`} />
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    
                    {/* Icon */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* CTAs */}
                    <div className="flex gap-2">
                      <Link
                        href={`/services/${service.id}`}
                        className="flex-1 bg-primary/5 hover:bg-primary hover:text-primary-foreground text-primary py-3 rounded-xl font-medium transition-all duration-300 group-hover:shadow-lg flex items-center justify-center"
                      >
                        {t('learnMore')}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <button 
                        onClick={() => openModal(service.title, service.id)}
                        className="px-4 py-3 bg-secondary hover:bg-accent text-secondary-foreground rounded-xl font-medium transition-all duration-300"
                      >
                        {t('orderService')}
                      </button>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                {language === 'ru' ? 'Не знаете, какую услугу выбрать?' : 'Қай қызметті таңдау керектігін білмейсіз бе?'}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {language === 'ru'
                  ? 'Наши специалисты помогут подобрать оптимальный пакет услуг для вашего автомобиля'
                  : 'Біздің мамандар сіздің автомобіліңіз үшін оңтайлы қызмет пакетін таңдауға көмектеседі'}
              </p>
              <button
                onClick={() => window.open(getWhatsAppConsultLink(language), '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                {language === 'ru' ? 'Получить консультацию' : 'Кеңес алу'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ServiceModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        serviceName={modalState.serviceName}
        serviceId={modalState.serviceId}
      />
    </>
  )
}