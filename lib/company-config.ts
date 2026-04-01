// ============================================================
// ЦЕНТРАЛИЗОВАННАЯ КОНФИГУРАЦИЯ КОМПАНИИ
// Чтобы изменить номер WhatsApp — измените ТОЛЬКО здесь:
// ============================================================

// === НОМЕРА WHATSAPP (легко менять) ===
const WHATSAPP_NUMBERS = {
  // Основной номер для всех заявок (без +, только цифры)
  primary: '77472040700',
  // Дополнительные номера (раскомментируйте если нужно)
  // secondary: '77471440100',
}

// Текущий активный номер WhatsApp для всех форм
const ACTIVE_WHATSAPP = WHATSAPP_NUMBERS.primary

export const COMPANY_CONFIG = {
  // Основная информация
  name: 'S3 DETAILING',
  fullName: 'S3 DETAILING - Премиум автодетейлинг',
  description: {
    ru: 'Профессиональный автодетейлинг с гарантией качества. Превращаем ваш автомобиль в произведение искусства.',
    kz: 'Кепілдікті сапалы кәсіби автодетейлинг. Сіздің автомобіліңізді өнер туындысына айналдырамыз.',
  },
  
  // Контактная информация
  contacts: {
    phone: {
      main: '8 (747) 204 07 00',
      formatted: '+77472040700',
      whatsapp: ACTIVE_WHATSAPP,
    },
    additionalPhones: [
      '8 (747) 144 01 00',
      '8 (707) 766 07 00',
    ],
    
    // Адрес
    address: {
      full: {
        ru: 'С/М Аксцент (Белые воды), Шымкент',
        kz: 'С/М Аксцент (Ақ сулар), Шымкент',
      },
      city: 'Шымкент',
      district: 'С/М Аксцент',
      coordinates: {
        lat: 42.4285145,
        lng: 69.849155,
      },
    },
  },

  // Социальные сети
  social: {
    instagram: {
      url: 'https://www.instagram.com/s3_detailing/',
      handle: '@s3_detailing',
    },
    telegram: {
      url: `https://wa.me/${ACTIVE_WHATSAPP}`,
      handle: '+7 747 204 07 00',
    },
    whatsapp: {
      url: `https://wa.me/${ACTIVE_WHATSAPP}`,
      handle: '+7 747 204 07 00',
    },
    tiktok: {
      url: '',
      handle: '',
    },
  },

  // Карты и навигация
  maps: {
    google: 'https://www.google.com/maps/place/S3+DETAILING/@42.4285145,69.849155,17z/data=!4m8!3m7!1s0x38a8e5520991144d:0x3deef045fe1134e9!8m2!3d42.4285145!4d69.849155!9m1!1b1!16s%2Fg%2F11lv7wq46c?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
    doubleGis: 'https://go.2gis.com/Rect5',
  },

  // Особенности
  features: {
    ru: [
      'Премиум материалы',
      'Опытные мастера',
      'Гарантия качества',
      'Современное оборудование',
    ],
    kz: [
      'Премиум материалдар',
      'Тәжірибелі шеберлер',
      'Сапа кепілдігі',
      'Заманауи жабдық',
    ],
  },
}

// ============================================================
// УТИЛИТЫ ДЛЯ WHATSAPP — все ссылки генерируются здесь
// ============================================================

export const formatPhone = (phone: string, format: 'display' | 'link' = 'display') => {
  if (format === 'link') {
    return phone.replace(/[^\d+]/g, '')
  }
  return phone
}

/** Ссылка WhatsApp с произвольным сообщением */
export const getWhatsAppLink = (message?: string) => {
  const phone = ACTIVE_WHATSAPP
  const encodedMessage = message ? encodeURIComponent(message) : ''
  return `https://wa.me/${phone}${encodedMessage ? `?text=${encodedMessage}` : ''}`
}

/** Ссылка WhatsApp для заказа конкретной услуги */
export const getWhatsAppServiceLink = (serviceName: string, lang: 'ru' | 'kz' = 'ru') => {
  const messages = {
    ru: `Здравствуйте! Хочу заказать услугу: ${serviceName}. Подскажите стоимость и запишите меня, пожалуйста.`,
    kz: `Сәлеметсіз бе! Мен қызметке тапсырыс бергім келеді: ${serviceName}. Бағасын айтыңыз және мені жазыңыз.`,
  }
  return getWhatsAppLink(messages[lang])
}

/** Ссылка WhatsApp для получения расчета */
export const getWhatsAppQuoteLink = (serviceName: string, lang: 'ru' | 'kz' = 'ru') => {
  const messages = {
    ru: `Здравствуйте! Хотел бы получить расчет стоимости на услугу: ${serviceName}.`,
    kz: `Сәлеметсіз бе! ${serviceName} қызметінің бағасын есептеп бере аласыз ба?`,
  }
  return getWhatsAppLink(messages[lang])
}

/** Ссылка WhatsApp для вопроса */
export const getWhatsAppQuestionLink = (lang: 'ru' | 'kz' = 'ru') => {
  const messages = {
    ru: 'Здравствуйте! У меня есть вопрос по услугам детейлинга.',
    kz: 'Сәлеметсіз бе! Менің детейлинг қызметтері бойынша сұрағым бар.',
  }
  return getWhatsAppLink(messages[lang])
}

/** Ссылка WhatsApp для консультации */
export const getWhatsAppConsultLink = (lang: 'ru' | 'kz' = 'ru') => {
  const messages = {
    ru: 'Здравствуйте! Хотел бы получить консультацию по услугам детейлинга.',
    kz: 'Сәлеметсіз бе! Детейлинг қызметтері бойынша кеңес алғым келеді.',
  }
  return getWhatsAppLink(messages[lang])
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