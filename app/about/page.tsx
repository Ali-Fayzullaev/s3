'use client'

import { useState } from 'react'
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Eye, 
  X,
  Star,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Target,
  Heart,
  CheckCircle,
  ArrowRight,
  Play
} from 'lucide-react'
import { useApp } from '../../lib/context'
import { COMPANY_CONFIG } from '../../lib/company-config'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image'

export default function AboutPage() {
  const { t } = useApp()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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

  const teamMembers = [
    {
      name: "Алексей Мастеров",
      position: t('founderMaster'),
      initials: "АМ",
      description: t('detailingExpert'),
      specialization: "Керамические покрытия, Полировка"
    },
    {
      name: "Дмитрий Стилист", 
      position: t('ppfMaster'),
      initials: "ДС",
      description: t('ppfExpert'),
      specialization: "PPF, Тонировка, Защитные пленки"
    }
  ]

  const achievements = [
    {
      icon: Users,
      number: "1000+",
      label: t('carsServed'),
      description: "За 8 лет работы"
    },
    {
      icon: Calendar,
      number: "5+",
      label: t('yearsExperience'),
      description: "В сфере детейлинга"
    },
    {
      icon: Star,
      number: "98%",
      label: "Довольных клиентов",
      description: "По отзывам клиентов"
    },
    {
      icon: Clock,
      number: "24/7",
      label: t('support247'),
      description: "Консультации по WhatsApp"
    }
  ]

  const principles = [
    {
      icon: Award,
      title: t('quality'),
      description: t('qualityDesc'),
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Clock,
      title: t('punctuality'),
      description: t('punctualityDesc'),
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Heart,
      title: t('individualApproach'),
      description: t('individualApproachDesc'),
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Shield,
      title: t('qualityGuarantee'),
      description: t('qualityGuaranteeDesc'),
      color: "bg-red-50 text-red-600"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section - Скромный */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{COMPANY_CONFIG.contacts.address.district}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('aboutTitle')}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                {t('professionalDetailingSince')}
              </p>
              
              <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* About Content - Две колонки */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Наша история
                </h2>
                
                <p className="text-muted-foreground leading-relaxed">
                  {t('aboutPageDescription1')}
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  {t('aboutPageDescription2')}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                  <div className="text-center p-4">
                    <div className="text-2xl font-bold text-primary mb-1">1000+</div>
                    <div className="text-sm text-muted-foreground">Обслуженных авто</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-2xl font-bold text-primary mb-1">5+</div>
                    <div className="text-sm text-muted-foreground">Лет опыта</div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/all_service.jpg"
                    alt="Наша команда за работой"
                    width={600}
                    height={400}
                    className="object-cover w-full h-96"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-lg border border-border">
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary mb-1">98%</div>
                    <div className="text-xs text-muted-foreground">Довольных клиентов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Principles - Скромные карточки */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('ourPrinciples')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Наши основные ценности, которые определяют качество наших услуг
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((principle, index) => {
                const IconComponent = principle.icon
                return (
                  <div key={index} className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
                    <div className={`w-12 h-12 rounded-lg ${principle.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Our Team - Простые карточки */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('ourTeam')}
              </h2>
              <p className="text-muted-foreground">
                Профессиональные мастера с многолетним опытом
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-sm border border-border">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shrink-0">
                      <span className="text-primary-foreground font-bold text-lg">{member.initials}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary text-sm font-medium mb-2">
                        {member.position}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {member.description}
                      </p>
                      <div className="text-xs text-muted-foreground bg-muted/50 rounded px-3 py-1 inline-block">
                        {member.specialization}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Gallery - Скромная галерея */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Портфолио наших работ
              </h2>
              <p className="text-muted-foreground">
                Примеры выполненных проектов по различным видам детейлинга
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.slice(0, 8).map((image, index) => (
                <div 
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-lg bg-muted"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={200}
                    className="object-cover w-full h-32 md:h-40 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute bottom-2 left-2 right-2 bg-black/70 rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs font-medium">{image.category}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                      <Eye className="w-5 h-5 text-foreground" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div className="text-center mt-8">
              <button className="inline-flex items-center px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg font-medium transition-colors duration-200">
                <Eye className="w-4 h-4 mr-2" />
                {t('viewPortfolio')}
              </button>
            </div>
          </div>
        </section>

        {/* Achievements - Компактная статистика */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <div key={index} className="text-center p-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-sm font-medium text-foreground mb-1">
                      {achievement.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {achievement.description}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA - Скромный призыв */}
        <section className="py-16 bg-card border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t('readyToTransform')}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('contactForConsultation')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${COMPANY_CONFIG.contacts.phone.formatted}`}
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                {t('callUs')}
              </a>
              <a 
                href={`https://wa.me/${COMPANY_CONFIG.contacts.phone.formatted.replace(/[^\d]/g, '')}?text=Здравствуйте! Интересуют услуги детейлинга.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg font-medium transition-colors duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                {t('sendMessage')}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-full transition-colors duration-200 z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <Image 
              src={selectedImage}
              alt="Портфолио работ"
              width={800}
              height={600}
              className="w-full h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}