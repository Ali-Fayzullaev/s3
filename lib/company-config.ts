// Централизованная конфигурация компании
export const COMPANY_CONFIG = {
  // Основная информация
  name: 'S3 DETAILING',
  fullName: 'S3 DETAILING - Премиум автодетейлинг',
  description: 'Профессиональный автодетейлинг с гарантией качества. Превращаем ваш автомобиль в произведение искусства.',
  
  // Контактная информация
  contacts: {
    phone: {
      main: '8 (747) 144 01 00',
      formatted: '+77471440100',
      whatsapp: '+77471440100'
    },
    additionalPhones: [
      '8 (747) 204 07 00',
      '8 (707) 766 07 00'
    ],
    email: 'info@s3detailing.kz',
    
    // Адрес
    address: {
      full: 'С/М Аксцент (Белые воды), Шымкент',
      city: 'Шымкент',
      district: 'С/М Аксцент (Белые воды)',
      coordinates: {
        lat: 42.4285145,
        lng: 69.849155
      }
    }
  },

  // Социальные сети
  social: {
    instagram: {
      url: 'https://www.instagram.com/s3_detailing/',
      handle: '@s3_detailing'
    },
    telegram: {
      url: 'https://wa.me/+77471440100',
      handle: '+77471440100'
    },
    whatsapp: {
      url: 'https://wa.me/+77471440100',
      handle: '+77471440100'
    },
    // TikTok будет добавлен позже
    tiktok: {
      url: '',
      handle: ''
    }
  },

  // Карты и навигация
  maps: {
    google: 'https://www.google.com/maps/place/S3+DETAILING/@42.4285145,69.849155,17z/data=!4m8!3m7!1s0x38a8e5520991144d:0x3deef045fe1134e9!8m2!3d42.4285145!4d69.849155!9m1!1b1!16s%2Fg%2F11lv7wq46c?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
    doubleGis: 'https://go.2gis.com/Rect5'
  },

  // Режим работы
  workingHours: {
    ru: {
      weekdays: 'Пн-Сб: 9:00 - 19:00',
      sunday: 'Воскресенье: выходной',
      note: 'Работаем по предварительной записи'
    },
    kz: {
      weekdays: 'Дс-Сн: 9:00 - 19:00',
      sunday: 'Жексенбі: демалыс',
      note: 'Алдын ала жазылу бойынша жұмыс істейміз'
    }
  },

  // Особенности
  features: {
    ru: [
      'Премиум материалы',
      'Опытные мастера',
      'Гарантия качества',
      'Современное оборудование'
    ],
    kz: [
      'Премиум материалдар',
      'Тәжірибелі шеберлер',
      'Сапа кепілдігі',
      'Заманауи жабдық'
    ]
  }
}

// Утилиты для работы с контактами
export const formatPhone = (phone: string, format: 'display' | 'link' = 'display') => {
  if (format === 'link') {
    return phone.replace(/[^\d+]/g, '')
  }
  return phone
}

export const getWhatsAppLink = (message?: string) => {
  const phone = COMPANY_CONFIG.contacts.phone.formatted
  const encodedMessage = message ? encodeURIComponent(message) : ''
  return `https://wa.me/${phone.replace('+', '')}${encodedMessage ? `?text=${encodedMessage}` : ''}`
}

export const getTelegramLink = () => {
  return COMPANY_CONFIG.social.telegram.url
}

export const getGoogleMapsLink = () => {
  return COMPANY_CONFIG.maps.google
}

export const getDoubleGisLink = () => {
  return COMPANY_CONFIG.maps.doubleGis
}