import { NextRequest, NextResponse } from 'next/server'

const API_CONFIG = {
  apiUrl: 'https://7105.api.greenapi.com',
  idInstance: '7105432496',
  apiTokenInstance: process.env.WHATSAPP_API_TOKEN || '',
  groupChatId: '120363425365185733@g.us'
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Проверяем наличие токена
    if (!API_CONFIG.apiTokenInstance || API_CONFIG.apiTokenInstance === 'ваш_api_token_здесь') {
      console.error('WhatsApp API token is not configured properly')
      
      // В режиме разработки возвращаем успешный ответ
      if (process.env.NODE_ENV === 'development') {
        console.log('Development mode: Simulating successful message send')
        console.log('Message content:', message)
        return NextResponse.json({ 
          success: true, 
          messageId: 'dev_test_' + Date.now(),
          note: 'Development mode - message not actually sent'
        })
      }
      
      return NextResponse.json(
        { error: 'WhatsApp API token not configured' },
        { status: 500 }
      )
    }

    console.log('Sending message to WhatsApp:', {
      chatId: API_CONFIG.groupChatId,
      messageLength: message.length
    })

    const response = await fetch(
      `${API_CONFIG.apiUrl}/waInstance${API_CONFIG.idInstance}/sendMessage/${API_CONFIG.apiTokenInstance}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chatId: API_CONFIG.groupChatId,
          message: message,
        }),
      }
    )

    const result = await response.json()
    console.log('WhatsApp API response:', result)

    if (result.idMessage) {
      return NextResponse.json({ success: true, messageId: result.idMessage })
    } else {
      console.error('WhatsApp API error:', result)
      return NextResponse.json(
        { error: 'Failed to send message', details: result },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('WhatsApp API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}