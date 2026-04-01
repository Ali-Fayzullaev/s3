'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, Shield, CheckCircle, Star } from 'lucide-react'
import { useApp } from '../../../lib/context'
import ServiceForm from '../../../components/ServiceForm'
import { ServiceDetail } from '../../../lib/services-data'

interface ServicePageClientProps {
  service: ServiceDetail
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
  const { language } = useApp()

  return (
    <div className="min-h-screen bg-background mt-16">
      <div className="bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link
              href="/#services"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'ru' ? 'Вернуться к услугам' : 'Қызметтерге оралу'}
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {service.name[language]}
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {service.fullDescription[language]}
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-card rounded-xl border">
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground mb-1">
                    {language === 'ru' ? 'Время работы' : 'Жұмыс уақыты'}
                  </div>
                  <div className="font-semibold text-card-foreground">{service.duration}</div>
                </div>
                <div className="text-center p-4 bg-card rounded-xl border">
                  <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground mb-1">
                    {language === 'ru' ? 'Гарантия' : 'Кепілдік'}
                  </div>
                  <div className="font-semibold text-card-foreground">{service.warranty[language]}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} rounded-2xl`} />
              <Image
                src={service.images[0]}
                alt={service.name[language]}
                width={600}
                height={400}
                className="relative rounded-2xl shadow-2xl object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Features */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                {language === 'ru' ? 'Особенности услуги' : 'Қызмет ерекшеліктері'}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.features[language].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                {language === 'ru' ? 'Процесс выполнения' : 'Орындау процесі'}
              </h2>
              <div className="space-y-6">
                {service.process[language].map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-muted-foreground">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                {language === 'ru' ? 'Преимущества' : 'Артықшылықтары'}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.benefits[language].map((benefit, index) => (
                  <div key={index} className="bg-card rounded-xl p-6 border">
                    <div className="flex items-start space-x-3">
                      <Star className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                      <span className="text-card-foreground">{benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                {language === 'ru' ? 'Галерея работ' : 'Жұмыстар галереясы'}
              </h2>
              <div className="gallery-container">
                <div className="gallery-carousel">
                  {[
                    '/ourWork/concierge_Full_Detail.jpg',
                    '/ourWork/mirror_Finish_Polishing.jpg',
                    '/ourWork/interior_Ceramic_Coating.jpg',
                    '/ourWork/paint_Protection_Armor.jpg',
                    '/ourWork/cleaning.jpg',
                    '/ourWork/hand_Stitched_Steering_Wheel_Wrap.jpg',
                    '/ourWork/hybrid_Paint_Correction.jpg',
                    '/ourWork/premium_Sound_Deadening.jpg',
                    '/ourWork/tinting.jpg',
                  ].map((img, i) => (
                    <div
                      key={i}
                      className={`carousel-face carousel-face-${i + 1}`}
                      style={{ backgroundImage: `url(${img})` }}
                    >
                      <div className="carousel-debug">{i + 1}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ServiceForm
                serviceName={service.name[language]}
                serviceId={service.id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
