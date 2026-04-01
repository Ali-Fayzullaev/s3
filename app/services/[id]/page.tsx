import { notFound } from 'next/navigation'
import { getServiceById } from '../../../lib/services-data'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import ServicePageClient from './ServicePageClient'

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
      <Header />
      <ServicePageClient service={service} />
      <Footer />
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
      title: 'Услуга не найдена - S3 DETAILING'
    }
  }

  return {
    title: `${service.name.ru} - S3 DETAILING`,
    description: service.shortDescription.ru
  }
}