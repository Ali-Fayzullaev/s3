'use client'

import { useApp } from '../lib/context'

export default function CarBrands() {
  const { t } = useApp()

  const brands = [
    { name: 'Audi', logo: '/marka_car/Audi_svg.png' },
    { name: 'BMW', logo: '/marka_car/bmw_logo_icon_145840 1.png' },
    { name: 'Chevrolet', logo: '/marka_car/chevrolet.png' },
    { name: 'Ford', logo: '/marka_car/ford.png' },
    { name: 'Honda', logo: '/marka_car/honda.png' },
    { name: 'Hyundai', logo: '/marka_car/hyundai.png' },
    { name: 'Kia', logo: '/marka_car/kia.png' },
    { name: 'Mercedes-Benz', logo: '/marka_car/mercedes_benz.png' },
    { name: 'Nissan', logo: '/marka_car/nissan.png' },
    { name: 'Tesla', logo: '/marka_car/tesla.png' },
    { name: 'Volkswagen', logo: '/marka_car/volkswagen.png' }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t('brandsTitle') || 'Работаем с автомобилями всех марок'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('brandsDescription') || 'Наши мастера имеют опыт работы с автомобилями любых марок и моделей. От бюджетных авто до премиальных суперкаров - мы знаем особенности каждого бренда.'}
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain filter dark:brightness-0 dark:invert group-hover:brightness-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {t('brandsFooterText') || 'И многие другие марки автомобилей'}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>✓ Европейские марки</span>
            <span>✓ Американские марки</span>
            <span>✓ Азиатские марки</span>
            <span>✓ Премиум сегмент</span>
            <span>✓ Электромобили</span>
          </div>
        </div>
      </div>
    </section>
  )
}