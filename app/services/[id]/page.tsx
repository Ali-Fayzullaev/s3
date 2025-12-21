import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, DollarSign, Shield, CheckCircle, Star } from 'lucide-react'
import { getServiceById } from '../../../lib/services-data'
import ServiceForm from '../../../components/ServiceForm'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer';
interface ServicePageProps {
  params: Promise<{ id: string }>
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { id } = await params
  const service = getServiceById(id)

  if (!service) {
    notFound()
  }

  return (
    <section>
      <Header/>
      <div className="min-h-screen bg-background mt-16">
      <div className="bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link 
              href="/#services"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Вернуться к услугам
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {service.name.ru}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {service.fullDescription.ru}
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-card rounded-xl border">
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground mb-1">Время работы</div>
                  <div className="font-semibold text-card-foreground">{service.duration}</div>
                </div>
                <div className="text-center p-4 bg-card rounded-xl border">
                  <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground mb-1">Гарантия</div>
                  <div className="font-semibold text-card-foreground">{service.warranty.ru}</div>
                </div>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative">
              <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} rounded-2xl`} />
              <Image
                src={service.images[0]}
                alt={service.name.ru}
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
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Features */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Особенности услуги
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {service.features.ru.map((feature, index) => (
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
                Процесс выполнения
              </h2>
              
              <div className="space-y-6">
                {service.process.ru.map((step, index) => (
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
                Преимущества
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {service.benefits.ru.map((benefit, index) => (
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
                Галерея работ
              </h2>
              
              {/* 3D Carousel Gallery */}
              <div className="gallery-container">
                <div className="gallery-carousel">
                  <div 
                    className="carousel-face carousel-face-1" 
                    style={{ backgroundImage: 'url(/ourWork/concierge_Full_Detail.jpg)' }}
                  >
                    <div className="carousel-debug">1</div>
                  </div>
                  <div 
                    className="carousel-face carousel-face-2" 
                    style={{ backgroundImage: 'url(/ourWork/mirror_Finish_Polishing.jpg)' }}
                  >
                    <div className="carousel-debug">2</div>
                  </div>
                  <div 
                    className="carousel-face carousel-face-3" 
                    style={{ backgroundImage: 'url(/ourWork/interior_Ceramic_Coating.jpg)' }}
                  >
                    <div className="carousel-debug">3</div>
                  </div>
                  <div 
                    className="carousel-face carousel-face-4" 
                    style={{ backgroundImage: 'url(/ourWork/paint_Protection_Armor.jpg)' }}
                  >
                    <div className="carousel-debug">4</div>
                  </div>
                  <div 
                    className="carousel-face carousel-face-5" 
                    style={{ backgroundImage: 'url(/ourWork/cleaning.jpg)' }}
                  >
                    <div className="carousel-debug">5</div>
                  </div>
                  <div 
                    className="carousel-face carousel-face-6" 
                    style={{ backgroundImage: 'url(/ourWork/hand_Stitched_Steering_Wheel_Wrap.jpg)' }}
                  >
                    <div className="carousel-debug">6</div>
                  </div>
                  <div 
                    className="carousel-face carousel-face-7" 
                    style={{ backgroundImage: 'url(/ourWork/hybrid_Paint_Correction.jpg)' }}
                  >
                    <div className="carousel-debug">7</div>
                  </div>
                  <div 
                    className="carousel-face carousel-face-8" 
                    style={{ backgroundImage: 'url(/ourWork/premium_Sound_Deadening.jpg)' }}
                  >
                    <div className="carousel-debug">8</div>
                  </div>
                  <div 
                    className="carousel-face carousel-face-9" 
                    style={{ backgroundImage: 'url(/ourWork/tinting.jpg)' }}
                  >
                    <div className="carousel-debug">9</div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar with Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ServiceForm 
                serviceName={service.name.ru}
                serviceId={service.id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </section>
    
  )
}

// Generate static params for better performance
export async function generateStaticParams() {
  return [
    { id: 'tinting' },
    { id: 'ppf' },
    { id: 'detailing' },
    { id: 'ceramic' },
    { id: 'lamination' },
    { id: 'polishing' },
    { id: 'antichrome' },
    { id: 'combined' },
    { id: 'steering-wheel' },
    { id: 'soundproofing' }
  ]
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { id } = await params
  const service = getServiceById(id)
  
  if (!service) {
    return {
      title: 'Услуга не найдена - DetailPro'
    }
  }

  return {
    title: `${service.name.ru} - DetailPro`,
    description: service.shortDescription.ru
  }
}