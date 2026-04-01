'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useApp } from '../lib/context'
import { getWhatsAppQuestionLink } from '../lib/company-config'

export default function FAQ() {
  const { t, language } = useApp()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: {
        ru: 'Сколько времени занимает тонировка автомобиля?',
        kz: 'Автомобильді тонировкалау қанша уақыт алады?',
      },
      answer: {
        ru: 'Тонировка стандартного легкового автомобиля занимает 2-4 часа в зависимости от сложности работ и типа пленки.',
        kz: 'Стандартты жеңіл автомобильді тонировкалау жұмыстың күрделілігі мен пленка түріне байланысты 2-4 сағатты алады.',
      },
    },
    {
      question: {
        ru: 'Как долго держится керамическое покрытие?',
        kz: 'Керамикалық жабын қанша уақыт сақталады?',
      },
      answer: {
        ru: 'Качественное керамическое покрытие служит от 2 до 5 лет в зависимости от условий эксплуатации автомобиля и ухода за покрытием.',
        kz: 'Сапалы керамикалық жабын автомобильдің пайдалану шарттары мен жабынға күтіміне байланысты 2-ден 5 жылға дейін қызмет етеді.',
      },
    },
    {
      question: {
        ru: 'Можно ли мыть автомобиль после нанесения покрытий?',
        kz: 'Жабын жағылғаннан кейін автомобильді жууға бола ма?',
      },
      answer: {
        ru: 'После нанесения керамического покрытия рекомендуется воздержаться от мойки в течение 7-14 дней для полного затвердевания.',
        kz: 'Керамикалық жабын жағылғаннан кейін толық қатаю үшін 7-14 күн бойы жуудан тартынуға кеңес беріледі.',
      },
    },
    {
      question: {
        ru: 'Какие гарантии вы предоставляете на услуги?',
        kz: 'Қызметтерге қандай кепілдік бересіздер?',
      },
      answer: {
        ru: 'Мы предоставляем гарантию от 6 месяцев до 3 лет в зависимости от вида услуги. На керамическое покрытие - до 3 лет.',
        kz: 'Біз қызмет түріне байланысты 6 айдан 3 жылға дейін кепілдік береміз. Керамикалық жабынға - 3 жылға дейін.',
      },
    },
    {
      question: {
        ru: 'Нужно ли записываться заранее?',
        kz: 'Алдын ала жазылу керек пе?',
      },
      answer: {
        ru: 'Да, рекомендуем записываться заранее, особенно на сложные услуги как керамическое покрытие или полная полировка.',
        kz: 'Иә, алдын ала жазылуды ұсынамыз, әсіресе керамикалық жабын немесе толық жылтырату сияқты күрделі қызметтерге.',
      },
    },
    {
      question: {
        ru: 'Работаете ли вы со страховыми случаями?',
        kz: 'Сақтандыру жағдайларымен жұмыс істейсіздер ме?',
      },
      answer: {
        ru: 'Да, мы работаем со страховыми компаниями и можем оформить все необходимые документы для возмещения.',
        kz: 'Иә, біз сақтандыру компанияларымен жұмыс істейміз және өтемақы алу үшін барлық қажетті құжаттарды рәсімдей аламыз.',
      },
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleAskQuestion = () => {
    window.open(getWhatsAppQuestionLink(language), '_blank')
  }

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
            {t('faqTitle')}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
            {t('faqTitle')}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('faqSubtitle')}
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-accent/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-card-foreground pr-8">
                  {faq.question[language]}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="border-t border-border pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer[language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">
              {language === 'ru' ? 'Не нашли ответ на свой вопрос?' : 'Сұрағыңызға жауап таппадыңыз ба?'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === 'ru'
                ? 'Свяжитесь с нами, и мы с радостью ответим на все ваши вопросы'
                : 'Бізбен байланысыңыз, біз сіздің барлық сұрақтарыңызға қуана жауап береміз'}
            </p>
            <button
              onClick={handleAskQuestion}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {language === 'ru' ? 'Задать вопрос в WhatsApp' : 'WhatsApp-та сұрақ қою'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}