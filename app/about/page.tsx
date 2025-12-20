// app/about/page.tsx
'use client'

import { useApp } from '../../lib/context'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function AboutPage() {
  const { t } = useApp()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t('aboutTitle')}
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/all_service.jpg" 
                  alt="Наша команда" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  Профессиональный детейлинг с 2015 года
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Мы - команда энтузиастов автомобильного детейлинга с более чем 8-летним опытом работы. 
                  Наша миссия - превратить каждый автомобиль в произведение искусства, используя 
                  передовые технологии и профессиональные материалы.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  За годы работы мы обслужили более 5000 автомобилей различных марок и моделей. 
                  От бюджетных авто до премиальных суперкаров - каждый проект мы выполняем 
                  с одинаковой тщательностью и вниманием к деталям.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-4 bg-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Наши принципы
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-card rounded-xl shadow-lg border border-border">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Качество
                </h3>
                <p className="text-muted-foreground">
                  Используем только проверенные материалы и современное оборудование
                </p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-xl shadow-lg border border-border">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Пунктуальность
                </h3>
                <p className="text-muted-foreground">
                  Соблюдаем сроки и уважаем время наших клиентов
                </p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-xl shadow-lg border border-border">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Индивидуальный подход
                </h3>
                <p className="text-muted-foreground">
                  Каждый автомобиль требует особого внимания и персонального подхода
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Наша команда
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-primary to-foreground rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground text-2xl font-bold">АМ</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Алексей Мастеров
                </h3>
                <p className="text-primary mb-3">Основатель и главный мастер</p>
                <p className="text-muted-foreground">
                  8 лет опыта в детейлинге. Специализируется на керамических покрытиях и полировке
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-foreground to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground text-2xl font-bold">ДС</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Дмитрий Стилист
                </h3>
                <p className="text-primary mb-3">Мастер по защитным пленкам</p>
                <p className="text-muted-foreground">
                  Эксперт по установке PPF и тонировке. Более 1000 успешных установок
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 px-4 bg-primary">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center text-primary-foreground">
              <div>
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-xl">Обслуженных авто</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">8</div>
                <div className="text-xl">Лет опыта</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-xl">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-xl">Поддержка</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Готовы преобразить ваш автомобиль?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Свяжитесь с нами для консультации и расчета стоимости услуг
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+77777777777" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Позвонить нам
              </a>
              <a 
                href="#contact" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Написать сообщение
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}