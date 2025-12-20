// WhatsApp API конфигурация
const API_CONFIG = {
  apiUrl: 'https://7105.api.greenapi.com',
  mediaUrl: 'https://7105.media.greenapi.com',
  idInstance: '7105432496',
  apiTokenInstance: process.env.NEXT_PUBLIC_WHATSAPP_API_TOKEN || '',
  groupChatId: '120363425365185733@g.us',
  phone: '77757410856'
}

// Типы сообщений
export interface ServiceMessage {
  serviceName: string
  clientName: string
  clientPhone: string
  clientEmail?: string
  message: string
  carModel?: string
}

export interface QuoteRequest extends ServiceMessage {
  serviceType: string
  preferredDate?: string
  preferredTime?: string
}

// Отправка сообщения в группу WhatsApp через наш API
export async function sendMessageToGroup(message: string): Promise<boolean> {
  try {
    const response = await fetch('/api/whatsapp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })

    const result = await response.json()
    return result.success || false
  } catch (error) {
    console.error('Error sending WhatsApp message:', error)
    return false
  }
}

// Форматирование сообщения о запросе услуги
export function formatServiceMessage(data: ServiceMessage): string {
  return `🚗 *НОВАЯ ЗАЯВКА НА УСЛУГУ*

📋 *Услуга:* ${data.serviceName}
👤 *Клиент:* ${data.clientName}
📞 *Телефон:* ${data.clientPhone}
${data.clientEmail ? `📧 *Email:* ${data.clientEmail}\n` : ''}
${data.carModel ? `🚙 *Модель авто:* ${data.carModel}\n` : ''}

💬 *Сообщение:*
${data.message}

⏰ *Время заявки:* ${new Date().toLocaleString('ru-RU', {
    timeZone: 'Asia/Almaty'
  })}

---
_Заявка отправлена с сайта DetailPro_`
}

// Форматирование сообщения о запросе расчета
export function formatQuoteMessage(data: QuoteRequest): string {
  return `💰 *ЗАПРОС РАСЧЕТА СТОИМОСТИ*

📋 *Услуга:* ${data.serviceName}
🔧 *Тип услуги:* ${data.serviceType}
👤 *Клиент:* ${data.clientName}
📞 *Телефон:* ${data.clientPhone}
${data.clientEmail ? `📧 *Email:* ${data.clientEmail}\n` : ''}
${data.carModel ? `🚙 *Модель авто:* ${data.carModel}\n` : ''}
${data.preferredDate ? `📅 *Предпочтительная дата:* ${data.preferredDate}\n` : ''}
${data.preferredTime ? `⏰ *Предпочтительное время:* ${data.preferredTime}\n` : ''}

💬 *Дополнительная информация:*
${data.message || 'Не указана'}

⏰ *Время заявки:* ${new Date().toLocaleString('ru-RU', {
    timeZone: 'Asia/Almaty'
  })}

---
_Запрос отправлен с сайта DetailPro_`
}

// Отправка заявки на услугу
export async function sendServiceRequest(data: ServiceMessage): Promise<boolean> {
  const message = formatServiceMessage(data)
  return await sendMessageToGroup(message)
}

// Отправка запроса на расчет
export async function sendQuoteRequest(data: QuoteRequest): Promise<boolean> {
  const message = formatQuoteMessage(data)
  return await sendMessageToGroup(message)
}