'use client'

import { Award, Users, Clock, Shield } from 'lucide-react'
import { useApp } from '../lib/context'

export default function About() {
  const { t } = useApp()

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

            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Узнать больше о нас
            </button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-linear-to-br from-primary/20 to-primary/5 rounded-2xl" />
                <div className="h-32 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl" />
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-32 bg-linear-to-br from-primary/15 to-primary/5 rounded-2xl" />
                <div className="h-48 bg-linear-to-br from-primary/25 to-primary/5 rounded-2xl" />
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-8 -right-8 bg-card rounded-2xl p-6 shadow-xl border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-card rounded-2xl p-6 shadow-xl border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}